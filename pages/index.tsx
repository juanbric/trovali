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
    "Simplifique los permisos estudiantiles con nuestra avanzada tecnología de reconocimiento facial. Acate el cumplimiento GDPR de la privacidad estudiantil. Cargue fotos y formularios en un solo lugar, verifique fácilmente el estado de los permisos y...";
  const title = "Trovali | Reconocimiento facial | Privacidad de los estudiantes";
  const date = new Date();
  const image = "https://svgshare.com/i/pdv.svg";

  const headerTitle = "Simplificando la gestión de fotos y privacidad de los estudiantes";
  const headerSubTitle =
    "Hola, somos Trovali. Una nueva empresa que aprovecha el poder de la inteligencia artificial para simplificar la gestión de fotos de estudiantes en las escuelas. Nuestra tecnología te ayuda a identificar cada estudiante junto a sus permisos correspondientes, y a organizar automáticamente las fotos por la identidad del estudiante para facilitar la búsqueda. ";
  const secondTitle =
    "Identifica a los estudiantes en las fotos, almacena y encuentra sus fotos, y haz seguimiento de sus permisos de privacidad.";
  const secondSubTitle =
    "Gestionar las fotos de los estudiantes puede ser una tarea desafiante para las escuelas, especialmente cuando se trata de los diferentes requisitos de privacidad que cada estudiante tiene. Es aquí donde entra en juego nuestra solución altamente personalizable y única en su tipo.";
  const secondCopy =
    "Mediante su tecnología de detección y reconocimiento facial, Trovali simplifica la publicación externa del contenido fotográfico escolar en regla con las normativas de protección de datos. Además, la plataforma organiza automáticamente las fotos por identidad de estudiante, lo que facilita la búsqueda y localización de las fotos de cualquier estudiante, ahorrando tiempo y esfuerzo al personal escolar. Esto no solo ayuda a las escuelas a mantener la privacidad del estudiante, sino que también facilita al personal la gestión, organización y acceso a las fotos de los estudiantes, y les ayuda a utilizarlas con fines educativos. La tecnología de Trovali es la solución definitiva para las escuelas que buscan gestionar eficientemente las fotos de los estudiantes mientras garantizan el cumplimiento de la privacidad estudiantil.";
  const platformHighlights =
    "Ofrecemos una experiencia de gestión de fotos nativa sin problemas, amigable y de clase mundial, diseñada para ser continuamente mejorada y ampliada con nuevas funciones. Con Trovali, los usuarios pueden estar seguros de que tendrán acceso a las últimas tecnologías y funciones para una gestión eficiente y efectiva de fotos escolares.";
  const featureOneTitle = "Permission tracking";
  const featureOneDescription =
    "Know which students have granted permission for their pictures to be shared externally by checking any picture on our platform";
  const featureTwoTitle = "Seamless photo searchability";
  const featureTwoDescription =
    "Easily locate any student's photos with our platform's automatic way of organizing photos by identity every time staff does an upload.";
  const featureThreeTitle = "Commercial use of photos";
  const featureThreeDescription =
    "Access and compile student photos accumulated throughout the years to use them for commercial purposes such as selling them to student's parents.";
  const jpQuote = `"Trovali simplifies student photo management for school staff, eliminating the need to manually check permissions before sharing a photo. As the founder, I'm proud to say that our innovative solution empowers school staff to focus on more meaningful tasks by automating the tedious process of managing student photos and permissions."`;
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

    </>
  );
}
