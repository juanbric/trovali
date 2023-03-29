import MetaTag from "@/components/MetaTag";
import Schema from "@/components/Schema";
import Link from "next/link";

const about = () => {
  const description =
    "Simplifica los permisos estudiantiles con nuestra avanzada tecnología de reconocimiento facial. Acate el cumplimiento GDPR de la privacidad estudiantil. Cargue fotos y formularios en un solo lugar, verifique fácilmente el estado de los permisos y...";
  const title = "Nosotros | Trovali | Reconocimiento facial";
  const date = new Date();
  const image = "https://svgshare.com/i/pdv.png";

  const headerTitle = "Transformando la gestión de fotos estudiantiles";
  const secondTitle =
    "Utilizando la última tecnología para simplificar la gestión de fotos de estudiantes en las escuelas";
  const secondSubTitle =
    "Nuestra aplicación se enfoca en la identificación automática de estudiantes. Esta función principal se logra mediante la tecnología de detección y reconocimiento facial que analiza las fotos subidas a la plataforma. La plataforma compara los rostros en las fotos con una foto de referencia de cada estudiante para determinar sus permisos correspondientes.";
  const secondCopy =
    "Además, nuestra plataforma organiza automáticamente las fotos por identidad del estudiante, lo que hace que sea fácil para el personal escolar buscar y localizar las fotos de cualquier estudiante. La plataforma también proporciona una base de datos privada donde se almacenan todas las fotos de los estudiantes, que solo pueden ser accedidas por personal autorizado mediante un sistema de gestión de acceso y contraseña.";

  const faceRecognition =
    "El reconocimiento facial es una tecnología que utiliza algoritmos informáticos para localizar e identificar rostros humanos en imágenes o videos digitales. La tecnología se puede utilizar para una variedad de aplicaciones, como sistemas de seguridad, etiquetado de fotos y biometría. El proceso de reconocimiento facial normalmente implica tres pasos principales:";
  const featureOneTitle = "Detección facial";
  const featureOneDescription =
    "Este paso implica identificar la presencia de un rostro en una imagen o video. Por lo general, se realiza mediante el análisis de patrones y características comúnmente asociadas con los rostros, como los ojos, la nariz y la boca.";
  const featureTwoTitle = "Alineación facial";
  const featureTwoDescription =
    "Una vez que se detecta un rostro, es necesario alinear la imagen en una posición estándar para que pueda compararse fácilmente con otros rostros. Este paso se realiza identificando los puntos clave del rostro, como los ojos, la nariz y la boca, y alineando el rostro en función de estos puntos.";
  const featureThreeTitle = "Reconocimiento facial";
  const featureThreeDescription =
    "Después de que se alinea el rostro, el paso final es compararlo con una base de datos de rostros conocidos para identificar a la persona. Esto se logra extrayendo características únicas del rostro, como la distancia entre los ojos o la forma de la mandíbula, y comparando estas características con una base de datos de rostros conocidos.";

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
        url={URL + "nosotros"}
        image={image}
      />

      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <section className="py-8 md:py-20">
            <div className="flex-col-reverse flex md:flex-row md:gap-14 items-center justify-center">
              <div className="">
                <h1 className="title-mobile md:title mb-8 md:mb-12">
                  {headerTitle}
                </h1>
                <Link
                  className="hover:bg-[#1b1393] bg-blue copy-big text-white py-3 rounded-[6px] px-6"
                  href={"/contacto"}
                >
                  Habla con nosotros
                </Link>
              </div>
              <div className="">
                <img
                  src="/students.png"
                  className="rounded-[6px] md:max-w-[500px] mb-8 md:mb-0"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="shadow-x">
        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
            <div className="py-8 md:py-20">
              <div className="flex-col flex md:flex-row md:gap-14 items-center justify-center">
                <div className="">
                <img
                    src="/lena.svg"
                    className="md:max-w-[500px] self-center items-center justify-center rounded-[6px]"
                  />
                </div>
                <div className="">
                  <div className="title-small pb-8">{secondTitle}</div>

                  <div className="sub-title mb-6">{secondSubTitle}</div>
                  <div className="">{secondCopy}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <section className="pt-[52px] pb-8 md:py-[88px] flex flex-col items-center justify-center">
            <div className="text-start md:grid md:grid-cols-3">
              <p className="title text-[#3c31dd] pb-4 md:col-span-2">
                Cómo funciona nuestra tecnología
              </p>
              <h2 className="sub-title mb-16 md:col-span-2">
                {faceRecognition}
              </h2>
            </div>
            <div className="text-start md:grid md:grid-cols-3 md:gap-16">
              <div className="flex flex-col max-w-[370px]">
                <img src="/detection.png" className="max-w-[260px] max-h-[150px] self-center" />
                <h2 className="logo pt-6 pb-2">{featureOneTitle}</h2>
                <h3 className="pb-16 md:pb-0">{featureOneDescription}</h3>
              </div>
              <div className="flex flex-col max-w-[370px]">
                <img src="/alignment.png" className="max-w-[260px] max-h-[150px] self-center" />
                <h2 className="logo pt-6 pb-2">{featureTwoTitle}</h2>
                <h3 className="pb-16 md:pb-0">{featureTwoDescription}</h3>
              </div>
              <div className="flex flex-col max-w-[370px]">
                <img src="/recognition.png" className="max-w-[260px] max-h-[150px] self-center" />
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

export default about;
