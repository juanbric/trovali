import Appbar from "./Appbar";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Appbar />
      {/* <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]"> */}
          {children}
          {/* </div>
      </div> */}
    </>
  );
}
