import Experience, { careerPath } from "@/components/Experience";
import Links, { myStuff } from "@/components/Links";
import MetaTag from "@/components/MetaTag";
import Projects, { gigs } from "@/components/Projects";
import Schema from "@/components/Schema";
import Spacer from "@/components/Spacer";
import { URL } from "@/config";
import Link from "next/link";

export default function Home() {
  const description =
    "Simplify student permissions with our advanced face recognition technology. Upload photos and forms in one place, easily check permission status and ...";
  const title = "Trovali | Face recognition | Student privacy compliance";
  const date = new Date();
  const image = "https://svgshare.com/i/pdv.svg";

  const headerTitle = "Shaping the iGaming frontend of tomorrow.";
  const headerSubTitle =
    "Hello, we are Shape Games. A new breed that combines the best in creative thinking, strategy and technology led by world-class execution at speed to drive customer engagement and deliver sustainable growth through trailblazing iGaming solutions.";

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
      <section className="h-screen">
        <div className="grid grid-cols-2">
          <div className="py-[128px]">
            <div className="title mb-2">{headerTitle}</div>
            <div className="sub-title mb-6">{headerSubTitle}</div>
              <Link
                className="hover:bg-[#1b1393] bg-blue copy-big text-white py-2 rounded-[6px] px-4"
                href={"/about"}
              >
                Learn more
              </Link>
          </div>
          <div></div>
        </div>
      </section>

      <Spacer size={35} />
    </>
  );
}
