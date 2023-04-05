import Link from "next/link";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";

const Banner = ({
  headerTitle,
  headerSubTitle,
}: {
  headerTitle: string;
  headerSubTitle: string;
}) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    onClose();
  };
  return (
    <div className="shadow-x lg:flex lg:justify-center lg:items-center">
      <div className="px-6 lg:px-8 w-auto lg:w-[1130px]">
        <section className="py-8 md:py-32">
          <div className="flex-col-reverse flex md:flex-row md:gap-14 items-center justify-center">
            <div className="">
              <h1 className="title title-mobile mb-4">{headerTitle}</h1>
              <div className="sub-title mb-8">{headerSubTitle}</div>
              <button
                className="hover:bg-[#1b1393] bold bg-blue text-white py-3 rounded-[6px] px-6"
                onClick={() => handleClick("invite")}
              >
                Habla con nosotros
              </button>
            </div>
            <div className="">
              <img src="/cover.png" className="rounded-[6px] md:max-w-[500px] mb-8 md:mb-0" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
