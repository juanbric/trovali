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
    <div className="bg-[#fffffb] items-center justify-between flex p-4 sticky top-0 z-10">
      <div className="">
        <Link
          className="flex hover:scale-110 transform-gpu ease-in-out duration-300 rounded-full"
          href={"/"}
        >
          <img src="/logo.svg" className="w-[32px] h-[32px] shadow-xl" />
          <h1 className="header self-center ml-1.5 logo">Trovali</h1>
        </Link>
      </div>

      {/* Grande */}
      <div className="hidden md:flex">
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
        <div className="hover:scale-110 transform-gpu ease-in-out duration-300">
          <Link
            className="bg-blue text-white py-2 rounded-[6px] px-4 "
            href={"/contact"}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Pequeno */}
      <div className="block md:hidden">
        <Menu maxW='50px'>
          <div className="hover:scale-110 transform-gpu ease-in-out duration-300">
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <Image src="/hamburguer.png" width={23} height={23} alt={""} />
              }
              variant="filled"
            />
          </div>
          <MenuList minW={"30px"} className="flex-col flex">
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
              className="bg-blue text-white py-2 rounded-[6px] px-4 mx-4 my-1 w-[88px]"
              href={"/contact"}
            >
              Contact
            </Link>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Appbar;
