import React, { useEffect } from "react";

const Invite = ({ id }: { id: any }) => {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    if (document.readyState === "complete") {
      loadScript();
    } else {
      window.addEventListener("load", loadScript);
      return () => {
        window.removeEventListener("load", loadScript);
      };
    }
  }, []);

  const url = "https://calendly.com/trovali/";

  return (
    <div id={id} className="lg:flex lg:justify-center lg:items-center">
      <div className="px-4 lg:px-8 w-auto lg:w-[1180px]">
        <section className="flex flex-col-reverse md:flex-row md:gap-14 justify-center py-8 md:pt-20">
          <div
            className="calendly-inline-widget max-w-[490px] h-[530px]  md:mt-0 mt-14"
            data-url={url}
          />
          <div className="text-start md:max-w-[500px]">
            <h2 className="header-title text-secondary mt-2">
              ¿Estás demasiado ocupado para una llamada rápida sobre cómo
              simplificar la gestión de la privacidad y las fotos de tus
              estudiantes?
            </h2>
            <h3 className="copy-light mt-8 mb-8">
              Agenda una llamada rápida donde <strong>aprenderás</strong> cómo
              gestionar las fotos de tus estudiantes de manera fácil y en regla
              con sus permisos de privacidad.
            </h3>
            <a
              href={url}
              className="hover:bg-[#1b1393] bold bg-blue text-white py-3 rounded-[6px] px-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agenda Una Llamada
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Invite;
