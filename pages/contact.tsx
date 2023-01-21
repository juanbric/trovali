// import emailjs from "emailjs-com";
import { useState } from "react";
import MetaTag from "../components/MetaTag";
import Schema from "../components/Schema";
import { SimpleModal } from "../components/SimpleModal";
import Spacer from "../components/Spacer";

export const ContactForm = () => {
  const [successModal, setSuccessModal] = useState<boolean>(false);

  const handleKeyDown = (e: any) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const SERVICE_ID = "service_y9n1a9t";
  const TEMPLATE_ID = "template_fy238wa";
  const USER_ID = "y7AuvMWzBJ45y1jcI";

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
    //   (result: any) => {
    //     console.log(result.text);
    //     setSuccessModal(true);
    //   },
    //   (error: any) => {
    //     console.log(error.text);
    //     // Error message
    //   }
    // );
    e.target.reset();
  };

  const description =
    "Simplify student permissions with our advanced face recognition technology. Upload photos and forms in one place, easily check permission status and ...";
  const title = "Trovali | Face recognition | Student privacy compliance";
  const date = new Date();
  const image = "https://svgshare.com/i/pdv.svg";
  const headerTitle = "Shaping the iGaming frontend of tomorrow.";

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
        <section className="md:h-screen">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="py-[52px] md:py-[128px]">
              <div className="title mb-2">{headerTitle}</div>
              <div className="sub-title mb-6">{headerTitle}</div>
            </div>
            <div className="pb-[52px] md:py-[128px] md:pb-0">
              <img src="/cover.png" className="rounded-[6px]" />
            </div>
          </div>
        </section>
      </div>
    </div>

      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <section className="">
            <h1 className="logo">Don't be shy, say hi!</h1>
            <Spacer size={12} />
            <div className="md:grid md:grid-cols-2 md:gap-12">
              <p>
                Si tienes alguna pregunta, sugerencia o simplemente quieres
                decir hola, no dudes en utilizar esta forma de contacto.
                Estaremos encantados de recibir tus mensajes y responderlos lo
                antes posible. También puedes encontrarnos en nuestras redes
                sociales, simplemente haz clic en los enlaces que encontrarás
                abajo en el pie de página. ¡Esperamos escuchar de ti pronto!
              </p>
              <Spacer size={32} />
              <form onSubmit={handleSubmit} className="">
                <InputField
                  name={"user_name"}
                  copy={"Tu nombre"}
                  type={"text"}
                />
                <InputField
                  name={"user_email"}
                  copy={"Tu correo electrónico"}
                  type={"email"}
                />
                <label className="" htmlFor="message">
                  Tu mensaje
                </label>
                <Spacer size={8} />
                <textarea
                  className="w-full lg:w-3/5 p-2 bg-[#f5f5f5] outline-none rounded-[6px]"
                  onKeyDown={handleKeyDown}
                  style={{ resize: "none" }}
                  name="user_message"
                />
                <Spacer size={16} />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue text-white hover:bg-[#1b1393] rounded-[6px]"
                >
                  Enviar
                </button>
              </form>
              <Spacer size={52} />
            </div>
            <SimpleModal
              isOpen={successModal}
              onClose={() => setSuccessModal(false)}
              headerText={"¡Gracias!"}
              description={"Nos pondremos en contacto contigo en en breve."}
            />
          </section>
        </div>
      </div>
    </>
  );
};

const InputField = ({
  name,
  copy,
  type,
}: {
  name: string;
  copy: string;
  type: string;
}) => {
  return (
    <>
      <label className="copy-bold azul" htmlFor={name}>
        {copy}
      </label>
      <Spacer size={8} />
      <input
        className="p-2 bg-[#f5f5f5] outline-none rounded-[6px] copy azul"
        type={type}
        name={name}
        required
      />
      <Spacer size={16} />
    </>
  );
};

export default ContactForm;
