import MetaTag from "@/components/MetaTag";
import Schema from "@/components/Schema";
import React from "react";

const features = () => {
  const description =
    "Simplify student permissions with our advanced face recognition technology. Upload photos and forms in one place, easily check permission status and ...";
  const title = "Trovali | Face recognition | Student privacy compliance";
  const date = new Date();
  const image = "https://svgshare.com/i/pdv.svg";

  const headerTitle = "Shaping the iGaming frontend of tomorrow.";
  const secondTitle =
    "Building upon a decade of experience delivering best-in-class solutions to some of the world’s most renowned companies, we founded Shape Games to bring the same proven approach to the iGaming industry.";
  const secondSubTitle =
    "Shape Games is an award-winning digital B-to-B platform and service provider for the iGaming industry. Our highly customisable native frontend is one of a kind, as it brings customer focused product development known from Silicon Valley startups to the gaming space.";
  const secondCopy =
    "We operate across Europe, North America and South America with our award-winning native omni-channel frontend platform, alongside our agnostic control panel that makes operations and integration of providers simple, quick and cost effective. The module-based solution is state-of-the-art and tested at scale with a number of market leading clients. Shape Games also delivers data warehouse setup and data management services as well as marketing services with a team of profiles that have successfully built, launched and operated iGaming business at scale.";

  const platformHighlights =
    "Our native platform offers a rock solid, fluid and best-in-class betting experience, built to be continously improved upon and expanded with new features.";
  const featureOneTitle = "Feature";
  const featureOneDescription =
    "Get personal recommendations, based on your betting history, preferences and user insights. We use machine learning to lay out the app to match your interests and preferred sports, teams, leagues and athletes.";
  const featureTwoTitle = "Feature";
  const featureTwoDescription =
    "Get personal recommendations, based on your betting history, preferences and user insights. We use machine learning to lay out the app to match your interests and preferred sports, teams, leagues and athletes.";
  const featureThreeTitle = "Feature";
  const featureThreeDescription =
    "Get personal recommendations, based on your betting history, preferences and user insights. We use machine learning to lay out the app to match your interests and preferred sports, teams, leagues and athletes.";

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

      <section className="shadow-x">
        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="pt-[52px] pb-8 md:py-[128px]">
                <img src="/logo.svg"/>
              </div>
              <div className="pb-[52px] md:py-[128px] ">
                <div className="mb-6">{secondSubTitle}</div>
                <div className="">{secondCopy}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="pt-[52px] pb-8 md:py-[128px]">
                <div className="mb-6">{secondSubTitle}</div>
                <div className="">{secondCopy}</div>
              </div>
              <div className="pb-[52px] md:py-[128px] flex items-center justify-center ">
                <img src="/logo.svg"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shadow-x">
        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="pt-[52px] pb-8 md:py-[128px]">
                <img src="/logo.svg"/>
              </div>
              <div className="pb-[52px] md:py-[128px] ">
                <div className="mb-6">{secondSubTitle}</div>
                <div className="">{secondCopy}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default features;
