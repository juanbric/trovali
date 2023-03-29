import MetaTag from "@/components/MetaTag";
import Schema from "@/components/Schema";
import Link from "next/link";
import React from "react";

const pricing = () => {
  const description =
    "Simplify student permissions with our advanced face recognition technology. Upload photos and forms in one place, easily check permission status and ...";
  const title = "Trovali | Face recognition | Student privacy compliance";
  const date = new Date();
  const image = "https://svgshare.com/i/pdv.svg";

  const secondSubTitle =
    "Our pricing is tailored to meet the specific needs of each school. Contact us to discuss your requirements and receive a personalized quote. Discover how easy and affordable it is to streamline student photo management with Trovali";

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
        url={URL}
        image={image}
      />

      <section className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <div className="md:grid md:grid-cols-2 md:gap-14">
            <div className="pt-[52px] pb-8 md:py-[128px] flex-col flex items-start justify-center">
              <div className="mb-6 copy-big">{secondSubTitle}</div>
              <Link
                className="hover:bg-[#1b1393] bg-blue copy-big text-white py-2 rounded-[6px] px-4"
                href={"/contact"}
              >
                Get in touch
              </Link>
            </div>
            <div className="pb-[52px] md:py-[128px] flex items-center justify-center ">
              <img src="/pricing.jpg" className="rounded-[6px]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default pricing;
