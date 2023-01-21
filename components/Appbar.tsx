import Link from "next/link";
import Image from "next/image";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

const Appbar = () => {
  return (
    <div className="bg-[#fffffb] py-1 lg:py-3 sticky top-0 z-10 shadow-x">
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
            </div>

            {/* Grande */}
            <div className="hidden md:flex items-center">
              <Link className="" href={"/about"}>
                About
              </Link>
              <Link className="px-4" href={"/features"}>
                Features
              </Link>
              <Link className="" href={"/benefits"}>
                Benefits
              </Link>
              <Link className="px-4" href={"/pricing"}>
                Pricing
              </Link>
              <Link className="pr-4" href={"/news"}>
                News
              </Link>
              <Link
                className="bg-blue hover:bg-[#1b1393] text-white py-2 rounded-[6px] px-4 "
                href={"/contact"}
              >
                Get in touch
              </Link>
            </div>

            {/* Pequeno */}
            <div className="block md:hidden">
              <Menu>
                <div className="hover:scale-110 transform-gpu ease-in-out duration-300">
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={
                      <Image
                        src="/hamburguer.png"
                        width={23}
                        height={23}
                        alt={""}
                      />
                    }
                    variant="filled"
                  />
                </div>
                <MenuList className="flex-col flex">
                  <MenuItem>
                    <Link className="pl-4 py-1" href={"/about"}>
                      About
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link className="pl-4 py-1" href={"/features"}>
                      Features
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link className="pl-4 py-1" href={"/benefits"}>
                      Benefits
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link className="pl-4 py-1" href={"/pricing"}>
                      Pricing
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link className="pl-4 py-1" href={"/news"}>
                      News
                    </Link>
                  </MenuItem>

                  <Link
                    className="bg-blue text-white py-2 rounded-[6px] px-4 mx-4 my-1 w-auto"
                    href={"/contact"}
                  >
                    Get in touch
                  </Link>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
