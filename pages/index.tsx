import MetaTag from "@/components/MetaTag";
import Schema from "@/components/Schema";
import { URL } from "@/config";
import Banner from "@/components/Banner";
import Link from "next/link";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import QuoteCard from "@/components/QuoteCard";
import BlogCard from "@/components/BlogCard";

export default function Home() {
  const description =
    "Simplify student permissions with our advanced face recognition technology. Upload photos and forms in one place, easily check permission status and ...";
  const title = "Trovali | Face recognition | Student privacy compliance";
  const date = new Date();
  const image = "https://svgshare.com/i/pdv.svg";

  const headerTitle = "Shaping the iGaming frontend of tomorrow.";
  const headerSubTitle =
    "Hello, we are Shape Games. A new breed that combines the best in creative thinking, strategy and technology led by world-class execution at speed to drive customer engagement and deliver sustainable growth through trailblazing iGaming solutions.";

  const secondTitle =
    "Native frontend offerings made to stand out and stick around.";
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
  const jpQuote = `"Trello is great for simplifying complex processes. As a manager, I can chunk processes down into bite-sized pieces for my team and then delegate that our, but still keep a bird's-eye view."`;
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

      {/* Header */}
      <Banner headerTitle={headerTitle} headerSubTitle={headerSubTitle} />

      {/* Second section */}
      <SecondSection
        secondTitle={secondTitle}
        secondSubTitle={secondSubTitle}
        secondCopy={secondCopy}
      />

      <ThirdSection
        platformHighlights={platformHighlights}
        featureOneTitle={featureOneTitle}
        featureOneDescription={featureOneDescription}
        featureTwoTitle={featureTwoTitle}
        featureTwoDescription={featureTwoDescription}
        featureThreeTitle={featureThreeTitle}
        featureThreeDescription={featureThreeDescription}
      />

      <QuoteCard jpQuote={jpQuote} />

      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <section className="pt-[52px] pb-8 md:py-[50px]">
            <p className="title pb-4">Latest news</p>
            <Link
              href={"/news"}
              className="font-bold hover:underline text-[#3c31dd]"
            >
              All news
            </Link>
            <div className="md:grid md:grid-cols-3 md:gap-12 pt-8">
              <BlogCard
                img={"/melenti.svg"}
                title={"ChatGPT is preparing for a new launch"}
                description={
                  "With the latest launch of OpenAI's start-up ChatGPT, the whole world has become mesmerized"
                }
              />
              <BlogCard
                img={"/melenti.svg"}
                title={"ChatGPT is preparing for a new launch"}
                description={
                  "With the latest launch of OpenAI's start-up ChatGPT, the whole world has become mesmerized"
                }
              />
              <BlogCard
                img={"/melenti.svg"}
                title={"ChatGPT is preparing for a new launch"}
                description={
                  "With the latest launch of OpenAI's start-up ChatGPT, the whole world has become mesmerized"
                }
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
