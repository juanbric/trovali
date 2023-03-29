import Link from "next/link";

const Banner = ({
  headerTitle,
  headerSubTitle,
}: {
  headerTitle: string;
  headerSubTitle: string;
}) => {
  return (
    <div className="lg:flex lg:justify-center lg:items-center">
      <div className="px-6 lg:px-8 w-auto lg:w-[1130px]">
        <section className="py-8 md:py-20">
          <div className="flex-col-reverse flex md:flex-row md:gap-14 items-center justify-center">
            <div className="">
              <h1 className="title title-mobile mb-4">{headerTitle}</h1>
              <div className="sub-title mb-8">{headerSubTitle}</div>
              <Link
                className="hover:bg-[#1b1393] bg-blue copy-big text-white py-2 rounded-[6px] px-4"
                href={"/nosotros"}
              >
                Aprende más
              </Link>
            </div>
            <div className="">
              <img src="/cover.png" className="rounded-[6px] md:max-w-[500px] mb-8 md:mb-0" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
