import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Menus } from "./menu";
export function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="items-center flex-wrap p-3 absolute w-full">
        <Link href="/">
          <div className="inline-flex items-center p-2 w-full">
            <img
              src="/assets/images/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="top-0 hidden xl:flex"
            />
            <Disclosure as="nav" className={`header z-50 w-full px-0`}>
              {({ open }) => (
                <>
                  <div>
                    <div className="container mx-auto max-w-6xl">
                      <div className="relative items-center justify-between">
                        <div className="items-center min-w-full sm:items-stretch">
                          <div className="hidden xl:block lg:ml-6">
                            <div className="space-x-4 ml-8 mr-8">
                              <div>
                                <ul className="navMenus justify-around text-white flex">
                                  {Menus.map((dt, idx) => (
                                    <li
                                      className="font-poppins-medium text-sm sm:text-md xl:text-md font-medium"
                                      key={idx}
                                    >
                                      <Link href={dt.path}>{dt.name}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center xl:hidden">
                          {/* Mobile menu button*/}
                          <Disclosure.Button className="inline-flex items-center justify-center  p-2 rounded-md menuToggleIcon focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white mt-5"> 
                            <span className="sr-only">Open main menu</span>
                            {!open ? (
                              <MenuIcon
                                className="text-white w-6 h-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <XIcon
                                className="text-white w-6 h-6"
                                aria-hidden="true"
                              />
                            )}
                          </Disclosure.Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Disclosure.Panel className="bg-black bg-opacity-80 xl:hidden mt-10 max-w-5xl m-auto">
                    <div className="px-2 pt-5 pb-3 space-y-1">
                      <div>
                        <ul className="flex-col navMenus text-center text-white">
                          {Menus.map((dt, idx) => (
                            <li
                              className="px-3 py-2 font-roboto-bold"
                              key={idx}
                            >
                              {dt.name != "divider" ? (
                                <Link href={dt.path}>{dt.name}</Link>
                              ) : (
                                <></>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </Link>
      </nav>
    </>
  );
}
