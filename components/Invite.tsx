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
    <div
      id={id}
      className="lg:flex lg:justify-center lg:items-center bg-primary"
    >
      <div className="px-4 lg:px-8 w-auto lg:w-[1180px]">
        <section className="flex flex-col-reverse md:flex-row md:gap-14 justify-center py-8 md:py-14">
          <div
            className="calendly-inline-widget max-w-[490px] h-[530px]  md:mt-0 mt-14"
            data-url={url}
          />
          <div className="text-start md:max-w-[500px]">
            <h2 className="header text-secondary mt-2">
              Are you too busy for a quick call about getting more leads?
            </h2>
            <h3 className="copy-light mt-8 mb-8">
              Schedule a quick call where <strong>you&apos;ll learn</strong> how
              to get leads for your Real Estate Agency without having to compete
              to national brands
            </h3>
            <a
              href={url}
              className="button copy-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule A Quick Call
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Invite;