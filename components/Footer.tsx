import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#fffffb] py-1 lg:py-4">
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <div className="flex justify-between items-center">
            <div>
              <Link
                className="flex hover:scale-110 transform-gpu ease-in-out duration-300 rounded-full"
                href={"/"}
              >
                <img src="/logo.svg" className="w-[32px] h-[32px] shadow-xl" />
                <h3 className="self-center ml-1.5 logo">Trovali</h3>
              </Link>
                <p className="pt-4 sub-copy">© 2023 TROVALI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
