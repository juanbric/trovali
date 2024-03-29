const ThirdSection = ({
  platformHighlights,
  featureOneTitle,
  featureOneDescription,
  featureTwoTitle,
  featureTwoDescription,
  featureThreeTitle,
  featureThreeDescription,
}: {
  platformHighlights: string;
  featureOneTitle: string;
  featureOneDescription: string;
  featureTwoTitle: string;
  featureTwoDescription: string;
  featureThreeTitle: string;
  featureThreeDescription: string;
}) => {
  return (
    <div className="lg:flex lg:justify-center lg:items-center">
      <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
        <section className="pt-[52px] pb-8 md:py-[100px] flex flex-col items-center justify-center">
          <div className="max-w-[811px] text-center">
            <p className="title pb-4">Lo mejor de nuestra plataforma</p>
            <h2 className="sub-title mb-16">{platformHighlights}</h2>
          </div>
          <div className="md:grid md:grid-cols-3 md:gap-16">
            <div className="text-center flex flex-col max-w-[370px]"> 
              <img src="/track.png" className="max-w-[260px] max-h-[180px] self-center" />
              <h2 className="logo pt-6 pb-2">{featureOneTitle}</h2>
              <h3 className="pb-16 md:pb-0">{featureOneDescription}</h3>
            </div>
            <div className="text-center flex flex-col max-w-[370px]">
              <img src="/search.png" className="max-w-[260px] max-h-[180px] self-center" />
              <h2 className="logo pt-6 pb-2">{featureTwoTitle}</h2>
              <h3 className="pb-16 md:pb-0">{featureTwoDescription}</h3>
            </div>
            <div className="text-center flex flex-col max-w-[370px]">
              <img src="/commercial.png" className="max-w-[260px] max-h-[180px] self-center" />
              <h2 className="logo pt-6 pb-2">{featureThreeTitle}</h2>
              <h3 className="pb-16 md:pb-0">{featureThreeDescription}</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ThirdSection;
