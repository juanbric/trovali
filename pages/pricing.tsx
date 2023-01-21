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

  const headerTitle = "Shaping the iGaming frontend of tomorrow.";
  const secondSubTitle =
    "Shape Games is an award-winning digital B-to-B platform and service provider for the iGaming industry. Our highly customisable native frontend is one of a kind, as it brings customer focused product development known from Silicon Valley startups to the gaming space.";
  const secondCopy =
    "We operate across Europe, North America and South America with our award-winning native omni-channel frontend platform, alongside our agnostic control panel that makes operations and integration of providers simple, quick and cost effective. The module-based solution is state-of-the-art and tested at scale with a number of market leading clients. Shape Games also delivers data warehouse setup and data management services as well as marketing services with a team of profiles that have successfully built, launched and operated iGaming business at scale.";

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

      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <section>
            <div className="md:grid md:grid-cols-2 md:gap-12 ">
              <div className="py-[52px] md:py-[208px] text-center md:text-start">
                <div className="title mb-2">{headerTitle}</div>
              </div>
              <div className="pb-[52px] md:py-[100px] md:pb-0 flex justify-center">
                <img src="/logo.svg" className="rounded-[6px] max-h-[350px]" />
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="">
        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="pt-[52px] pb-8 md:py-[128px] flex-col flex items-start justify-center">
                <div className="mb-6">{secondSubTitle}</div>
                <Link
                className="hover:bg-[#1b1393] bg-blue copy-big text-white py-2 rounded-[6px] px-4"
                href={"/contact"}
              >
                Get in touch
              </Link>
              </div>
              <div className="pb-[52px] md:py-[128px] flex items-center justify-center ">
                <img src="/logo.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default pricing;
