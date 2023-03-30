import Head from "next/head";

export const MetaTag = ({
  title,
  description,
  url,
  image,
}: {
  title: any;
  description: any;
  url: any;
  image: any;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={
          "inteligencia artificial, ai, artificial intelligence, detección facial, reconocimiento facial, privacidad estudiantil, organización de fotos, búsqueda de fotos, escuelas, las palmas de gran canaria, españa, spain, privacidad de mi hijo"
        }
      />
      <meta name="distribution" content="Global" />
      <link rel="canonical" href={url} />
      <meta name="revisit-after" content="21 days" />
      <meta name="creator" content="Juan Pablo Briceno" />
      <link rel="icon" href="https://svgshare.com/i/pdv.svg" />
      <meta http-equiv="content-language" content="en" />
      <meta name="twitter:site" content="@juanbri_sol" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="classification"
        content="agencia de desarrollo web, seo, las palmas de gran canaria, web development agency, freelance developer, frontend developer"
      />
      <meta name="robots" content="index, follow" />
      <meta name="twitter:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
};
export default MetaTag;
