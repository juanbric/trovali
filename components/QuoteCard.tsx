const QuoteCard = ({jpQuote}:{jpQuote:string}) => {
  return (
    <section className="shadow-x md:h-screen">
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <div className="pt-[52px] pb-8 md:py-[128px]">
            <div className="md:grid md:grid-cols-5 md:gap-8 border shadow-xl rounded-[6px]">
              <div className="py-[52px] px-8 md:col-span-3">
                <div className="mb-2 header italic">{jpQuote}</div>
                <div className="border w-1/3 mb-4 mt-12"></div>
                <a
                  href={"https://www.juanbri.dev"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold pb-2 hover:underline"
                >
                  Juan Pablo Briceno
                </a>
                <p>Trovali Cofounder</p>
              </div>
              <div className="py-[52px] px-8 md:col-span-2 justify-between flex flex-col bg-gradient-to-r from-[#e8e7fb] to-[#fffffb]">
                <div className="header mb-6">
                  75% of organizations report that Trello delivers value to
                  their business within 30 days.
                </div>
                <div className="flex flex-col">
                  <a
                    href={""}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline copy"
                  >
                    AI survey on facial detection
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCard;
