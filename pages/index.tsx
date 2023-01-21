import Experience, { careerPath } from "@/components/Experience";
import Links, { myStuff } from "@/components/Links";
import MetaTag from "@/components/MetaTag";
import Projects, { gigs } from "@/components/Projects";
import Schema from "@/components/Schema";
import Spacer from "@/components/Spacer";
import { URL } from "@/config";

export default function Home() {
  const description =
    "Simplify student permissions with our advanced face recognition technology. Upload photos and forms in one place, easily check permission status and ...";
  const title = "Trovali | Face recognition | Student privacy compliance";
  const date = new Date();
  const image = "https://svgshare.com/i/pdv.svg";

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
      <section className="bg-blue h-screen">
        
          <h2 className="header">Juan Pablo Briceno</h2>
          <h2 className="copy mt-1">Product-focused Front End Developer</h2>
          <a
            href={"https://twitter.com/juanbrisol"}
            target="_blank"
            rel="noopener noreferrer"
            className="sub-copy hover:underline"
          >
            @juanbrisol
          </a>
      </section>

      <Spacer size={35} />

      {/* Bio */}
      <section>
        <p>About</p>
        <Spacer size={7} />
        <h1 className="copy">{description}</h1>
      </section>

      <Spacer size={49} />

      {/* CV */}
      <section>
        <h2>Work Experience</h2>
        <Spacer size={35} />
        {careerPath.map((experience, i) => {
          return (
            <Experience
              period={experience.period}
              title={experience.title}
              workLink={experience.workLink}
              description={experience.description}
              tech={experience.tech}
              key={i}
            />
          );
        })}
      </section>
      <Spacer size={15} />

      {/* Side Projects */}
      <section>
        <h2>Side Projects</h2>
        <Spacer size={35} />
        {gigs.map((project, i) => {
          return (
            <Projects
              period={project.period}
              title={project.title}
              workLink={project.workLink}
              description={project.description}
              tech={project.tech}
              img={project.img}
              key={i}
            />
          );
        })}
      </section>

      <section>
        <h2>Links</h2>
        <Spacer size={35} />
        {myStuff.map((stuff, i) => {
          return (
            <Links
              platform={stuff.platform}
              link={stuff.link}
              userName={stuff.userName}
              key={i}
            />
          );
        })}
      </section>
    </>
  );
}
