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
                <p>Fundador - Trovali</p>
              </div>
              <div className="py-[52px] px-8 md:col-span-2 justify-between flex flex-col bg-gradient-to-r from-[#e8e7fb] to-[#fffffb]">
                <div className="header mb-6">
                Se espera que el valor del mercado de reconocimiento facial alcance los $8.5 mil millones para 2025, lo que representa un crecimiento significativo desde los $3.8 mil millones en 2020 a medida que las organizaciones comprenden su inmenso potencial empresarial.
                </div>
                <div className="flex flex-col">
                  <a
                    href={"https://www.marketsandmarkets.com/Market-Reports/facial-recognition-market-995.html"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline copy"
                  >
                    Markets and Markets, 2020
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
