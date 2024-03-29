import Invite from "@/components/Invite";
import MetaTag from "@/components/MetaTag";
import Schema from "@/components/Schema";
import Link from "next/link";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";

const Precios = () => {
  const description =
    "Simplify student permissions with our advanced face recognition technology. Upload photos and forms in one place, easily check permission status and ...";
  const title = "Trovali | Face recognition | Student privacy compliance";
  const date = new Date();
  const image = "https://i.ibb.co/gF5m2ZY/Group-48095686.png";

  const secondSubTitle =
    "En Trovali, nos adaptamos a las necesidades de cada escuela en cuanto a la gestión de fotos de estudiantes. Contáctanos para discutir tus requerimientos y obtener un presupuesto personalizado. Descubre lo sencillo y útil que es simplificar la gestión de fotos de estudiantes con nuestra tecnología.";
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
    <>
      <Schema
        title={title}
        date={date}
        image={image}
        description={description}
        articleBody={undefined}
      />
      <MetaTag
        title={title}
        description={description}
        url={URL + "precios"}
        image={image}
      />

      <section className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <div className="md:grid md:grid-cols-2 md:gap-14">
            <div className="pt-[52px] pb-8 md:py-[128px] flex-col flex items-start justify-center">
              <h1 className="title-mobile md:title mb-4">Precios</h1>
              <div className="mb-6 copy-big">{secondSubTitle}</div>
              <button
                className="hover:bg-[#1b1393] bold bg-blue text-white py-3 rounded-[6px] px-6"
                onClick={() => handleClick("invite")}
              >
                Habla con nosotros
              </button>
            </div>
            <div className="pb-[52px] md:py-[128px] flex items-center justify-center ">
              <img src="/pricing.png" className="rounded-[6px]" />
            </div>
          </div>
          <Invite id={"invite"} />
        </div>
      </section>
    </>
  );
};

export default Precios;
