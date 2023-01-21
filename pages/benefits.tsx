import MetaTag from "@/components/MetaTag";
import Schema from "@/components/Schema";
import React from "react";

const benefits = () => {
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
        <section className="md:h-screen">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="py-[52px] md:py-[128px]">
              <div className="title mb-2">{headerTitle}</div>
              <div className="sub-title mb-6">{headerTitle}</div>
            </div>
            <div className="pb-[52px] md:py-[128px] md:pb-0">
              <img src="/cover.png" className="rounded-[6px]" />
            </div>
          </div>
        </section>
      </div>
    </div>

      <div className="lg:flex lg:justify-center shadow-x lg:items-center">
      <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
        <section className="pt-[52px] pb-8 md:py-[98px] flex flex-col items-center justify-center">
          <div className="max-w-[511px] text-center">
            <p className="title pb-4">Platform highlights</p>
            <h2 className="sub-title mb-16">{platformHighlights}</h2>
          </div>
          <div className="md:grid md:grid-cols-3 md:gap-16">
            <div className="text-center flex flex-col max-w-[370px]">
              <img src="/logo.svg" className="" />
              <h2 className="logo pt-6 pb-2">{featureOneTitle}</h2>
              <h3 className="pb-16 md:pb-0">{featureOneDescription}</h3>
            </div>
            <div className="text-center flex flex-col max-w-[370px]">
              <img src="/logo.svg" className="" />
              <h2 className="logo pt-6 pb-2">{featureTwoTitle}</h2>
              <h3 className="pb-16 md:pb-0">{featureTwoDescription}</h3>
            </div>
            <div className="text-center flex flex-col max-w-[370px]">
              <img src="/logo.svg" className="" />
              <h2 className="logo pt-6 pb-2">{featureThreeTitle}</h2>
              <h3 className="pb-16 md:pb-0">{featureThreeDescription}</h3>
            </div>
          </div>
        </section>
      </div>
    </div>

    </>
  );
};

export default benefits;
