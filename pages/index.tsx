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

  const headerTitle =
    "Simplify student photo management with face recognition";
  const headerSubTitle =
    "Hello, we are Trovali. A new company harnessing the power of AI to streamline student photo management for schools. Our technology provides a clear understanding of which students have granted permission for their pictures to be shared externally, and automatically organizes photos by student identity for easy searchability.";

  const secondTitle =
    "Easy to identify students in pictures, store and find their photos, and track their privacy permissions.";
  const secondSubTitle =
    "Managing student photos can be a challenging task for schools, especially when it comes to the different privacy requirements each student has. That's where our highly customizable, one-of-a-kind solution comes in.";
  const secondCopy =
    "Our platform provides schools with a clear understanding of which students have granted permission for their pictures to be shared externally, ensuring compliance with student privacy laws. Additionally, the platform automatically organizes photos by student identity, making it easy to search and locate any student's photos, saving time and effort for school staff. This not only helps schools to keep student privacy but also makes it easier for staff to manage, organize and access student photos, and help them to use them for educational purposes. Trovali's technology is the ultimate solution for schools looking to efficiently manage student photos while ensuring compliance with student privacy.";
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
