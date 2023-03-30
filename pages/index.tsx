import MetaTag from "@/components/MetaTag";
import Schema from "@/components/Schema";
import { URL } from "@/config";
import Banner from "@/components/Banner";
import Link from "next/link";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import QuoteCard from "@/components/QuoteCard";
import BlogCard from "@/components/BlogCard";
import VinyardPlayer from "@/components/VinyardPlayer";

export default function Home() {
  const description =
    "Simplifique los permisos estudiantiles con nuestra avanzada tecnología de reconocimiento facial. Acate el cumplimiento GDPR de la privacidad estudiantil. Cargue fotos y formularios en un solo lugar, verifique fácilmente el estado de los permisos y...";
  const title =
    "Trovali | Reconocimiento facial | Privacidad de los estudiantes";
  const date = new Date();
  const image = "https://svgshare.com/i/raw.svg";

  const headerTitle =
    "Simplificando la gestión de fotos y privacidad de los estudiantes";
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
  const featureOneTitle = "Seguimiento de permisos";
  const featureOneDescription =
    "Verifica en nuestra plataforma el permiso de cada estudiante para compartir sus fotos externamente.";
  const featureTwoTitle = "Búsqueda de fotos";
  const featureTwoDescription =
    "Encuentra fácilmente las fotos de cualquier estudiante con nuestra plataforma que las organiza automáticamente por identidad.";
  const featureThreeTitle = "Uso comercial de fotos";
  const featureThreeDescription =
    "Accede y compila las fotos de los estudiantes acumuladas a lo largo de los años para usarlas con fines comerciales, como venderlas a sus padres.";
  const jpQuote = `"Trovali simplifica la gestión de fotos de los estudiantes para el personal escolar, eliminando la necesidad de verificar manualmente los permisos antes de compartir una foto. Como fundador, me enorgullece decir que nuestra solución innovadora permite al personal escolar enfocarse en tareas más significativas al automatizar el tedioso proceso de gestionar las fotos y permisos de los estudiantes."`;
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
      <ThirdSection
        platformHighlights={platformHighlights}
        featureOneTitle={featureOneTitle}
        featureOneDescription={featureOneDescription}
        featureTwoTitle={featureTwoTitle}
        featureTwoDescription={featureTwoDescription}
        featureThreeTitle={featureThreeTitle}
        featureThreeDescription={featureThreeDescription}
      />
      <SecondSection
        secondTitle={secondTitle}
        secondSubTitle={secondSubTitle}
        secondCopy={secondCopy}
      />

      <VinyardPlayer />
      <QuoteCard jpQuote={jpQuote} />
    </>
  );
}
