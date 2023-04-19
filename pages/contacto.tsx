//@ts-ignore
import emailjs from "emailjs-com";
import { useState } from "react";
import MetaTag from "../components/MetaTag";
import Schema from "../components/Schema";
import { SimpleModal } from "../components/SimpleModal";
import Spacer from "../components/Spacer";
import Invite from "@/components/Invite";

export const Contacto = () => {
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
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result: any) => {
        console.log(result.text);
        setSuccessModal(true);
      },
      (error: any) => {
        console.log(error.text);
        // Error message
      }
    );
    e.target.reset();
  };

  const description =
    "Simplify student permissions with our advanced face recognition technology. Upload photos and forms in one place, easily check permission status and ...";
  const title = "Trovali | Face recognition | Student privacy compliance";
  const date = new Date();
  const image = "https://i.ibb.co/gF5m2ZY/Group-48095686.png";

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
        url={URL + "contacto"}
        image={image}
      />

      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <section className="">
            <div className="md:grid md:grid-cols-2 md:gap-14">
              <div className="py-[52px] md:pt-[128px]">
                <img
                  src="/contact.png"
                  className="rounded-[6px] md:max-w-[500px] md:mb-0"
                />
              </div>
              <div className="pb-[52px] md:py-[128px] md:pb-0">
                <p className="title mb-8">¡Hola!</p>
                <p className="mb-8">
                  No dudes en contactarnos para hablar sobre cómo podemos
                  trabajar juntos para simplificar la gestión de fotos de
                  estudiantes en tu escuela. Estamos aquí para responder a
                  cualquier pregunta que puedas tener. Ponte en contacto con
                  nosotros hoy mismo para conocer más sobre nuestra solución
                  innovadora.
                </p>
                <form onSubmit={handleSubmit} className="">
                  <div className="flex flex-col md:flex-row gap-4">
                    <InputField
                      name={"user_name"}
                      copy={"Tu nombre"}
                      type={"text"}
                    />
                    <InputField
                      name={"user_email"}
                      copy={"Tu email"}
                      type={"email"}
                    />
                  </div>
                  <Spacer size={16} />

                  <label className="" htmlFor="message">
                    Tu mensaje
                  </label>
                  <Spacer size={8} />
                  <textarea
                    className="w-full md:w-4/5 p-2 bg-[#f5f5f5] outline-none rounded-[6px]"
                    onKeyDown={handleKeyDown}
                    style={{ resize: "none" }}
                    name="user_message"
                  />
                  <Spacer size={16} />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue text-white hover:bg-[#1b1393] rounded-[6px]"
                  >
                    Envia
                  </button>
                </form>
              </div>
            </div>
            <Invite id={""}/>
          </section>
        </div>
      </div>

      <SimpleModal
        isOpen={successModal}
        onClose={() => setSuccessModal(false)}
        headerText={"¡Gracias!"}
        description={"Responderemos tu mensaje en breve"}
      />
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
    <div className="flex flex-col">
      <label className="" htmlFor={name}>
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
    </div>
  );
};

export default Contacto;
