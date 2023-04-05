import Link from "next/link";
import Image from "next/image";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const Appbar = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    onClose();
  };
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
            <div className="hidden bold md:flex items-center">
              <Link className="" href={"/nosotros"}>
                Nosotros
              </Link>
              {/* <Link className="px-4" href={"/features"}>
                Features
              </Link>
              <Link className="" href={"/benefits"}>
                Benefits
              </Link> */}
              <Link className="px-6" href={"/precios"}>
                Precios
              </Link>
              <Link className="pr-6" href={"/blog"}>
                Blog
              </Link>
              <Link className="" href={"/contacto"}>
                Contacto
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
                    <Link className="pl-4 py-1" href={"/nosotros"}>
                      Nosotros
                    </Link>
                  </MenuItem>
                  {/* <MenuItem>
                    <Link className="pl-4 py-1" href={"/features"}>
                      Features
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link className="pl-4 py-1" href={"/benefits"}>
                      Benefits
                    </Link>
                  </MenuItem> */}
                  <MenuItem>
                    <Link className="pl-4 py-1" href={"/precios"}>
                      Precios
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <div
                      className="pl-4 py-1"
                      onClick={() => handleClick("invite")}
                    >
                      Habla con nosotros
                    </div>
                  </MenuItem>

                  <MenuItem>
                    {/* <Link className="pl-4 py-1" href={"/news"}>
                      News
                    </Link> */}
                  </MenuItem>
                  <MenuItem>
                    <Link className="pl-4 py-1" href={"/contacto"}>
                      Contacto
                    </Link>
                  </MenuItem>
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
