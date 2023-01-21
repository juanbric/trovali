import BlogCard from "@/components/BlogCard";
import MetaTag from "@/components/MetaTag";
import Schema from "@/components/Schema";
import Spacer from "@/components/Spacer";
import { createClient } from "contentful";
import Link from "next/link";

// export async function getStaticProps() {
//   // Store contentful API keys into a client variable
//   const client = createClient({
//     //@ts-ignore
//     space: process.env.CONTENTFUL_SPACE_ID,
//     //@ts-ignore
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   });

//   // Store blog content from our contentful space into a res variable
//   const res = await client.getEntries({ content_type: "blog" });

//   // Adding .items to res gives us the whole object of the blog content
//   return {
//     props: {
//       blogs: res.items,
//       revalidate: 1,
//     },
//   };
// }

const News = ({ blogs }: { blogs: any }) => {
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
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <section className="pt-[52px] pb-8 md:py-[50px]">
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

      {/* {blogs?.map((article: any, i: any) => {
          const { title, slug, description } = article?.fields;
          const img = article?.fields.img.fields.file.url;
          return (
            <div key={i} className="md:col-span-1 md:mb-0 mb-6 hover:scale-105 transform-gpu ease-in-out duration-300">
              <Link
                key={article?.sys.id}
                href={slug}
                className="justify-center items-center"
              >
                <BlogCard img={img} title={title} description={description} />
              </Link>
            </div>
          );
        })} */}
    </>
  );
};

export default News;
