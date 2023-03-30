//@ts-ignore
import { createClient } from "contentful";
import Link from "next/link";
import BlogCard from "../components/BlogCard";
import MetaTag from "../components/MetaTag";
import { Spacer } from "../components/Spacer";
// import SubscribeForm from "../components/SubscribeForm";
import { URL } from "../config";

export async function getStaticProps() {
  // Store contentful API keys into a client variable
  const client = createClient({
    //@ts-ignore
    space: process.env.CONTENTFUL_SPACE_ID,
    //@ts-ignore
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  // Store blog content from our contentful space into a res variable
  const res = await client.getEntries({ content_type: "blog" });

  // Adding .items to res gives us the whole object of the blog content
  return {
    props: {
      blogs: res.items,
      revalidate: 1,
    },
  };
}

const Blog = ({ blogs }: { blogs: any }) => {
  const description =
    "Sumérgete en el mundo del reconocimiento facial, la privacidad y cómo Trovali está revolucionando la gestión de fotos de estudiantes en las escuelas.";
  const title = "Blog de Trovali | Reconocimiento facial";
  const date = new Date();
  const image = "https://i.ibb.co/gF5m2ZY/Group-48095686.png";
  return (
    <>
      <MetaTag
        title={title}
        description={description}
        url={"blog"}
        image={image}
      />
        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="px-4 lg:px-8 w-auto lg:max-w-[880px] py-[100px] text-center">
            <h1 className="md:title title-mobile mb-8 text-center">
            Resguardando Memorias,<br/> Protegiendo Identidades
            </h1>
            <p className="">
              Sumérgete en el mundo del reconocimiento facial, la privacidad y
              cómo Trovali está revolucionando la gestión de fotos de
              estudiantes en las escuelas. Aquí, compartimos ideas, noticias y
              tendencias sobre estos temas relevantes en el ámbito educativo y
              tecnológico. ¡Acompáñanos en este viaje de descubrimiento y
              aprendizaje!
            </p>
          </div>
        </div>
      <Spacer size={30} />
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1180px]">
          <div className="md:grid md:grid-cols-3 md:gap-8">
            {blogs.map((article: any, i: any) => {
              const { title, slug, description, author } = article?.fields;
              const img = article?.fields.img.fields.file.url;
              const date = article.sys.updatedAt;
              return (
                <div
                  key={i}
                  className="md:col-span-1 md:mb-0 mb-6 hover:scale-105 transform-gpu ease-in-out duration-300"
                >
                  <Link
                    key={article?.sys.id}
                    href={slug}
                    className="justify-center items-center"
                  >
                    <BlogCard
                      img={img}
                      title={title}
                      description={description}
                      date={date}
                      author={author}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Spacer size={40} />
    </>
  );
};

export default Blog;
