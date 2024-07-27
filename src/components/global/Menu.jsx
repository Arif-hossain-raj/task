"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";

export default function Menu() {
  const [isDesktop, setIsDesktop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsDesktop(window.innerWidth > 767);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <section className="relative z-50 bg-white">
      <div className="max-w-screen-xl mx-auto px-10">
        {/* Desktop Menu (Visible above 767px) */}
        {isDesktop ? (
          <div className="flex items-center justify-between">
            <div className="w-1/4">
              <div className="menu__logo">
                <Link href='/'>
                  <img
                    src="/image/static/logo.png"
                    alt="Logo"
                    className="w-[230px] h-[106px] max-w-xs"
                  />
                </Link>
              </div>
            </div>
            <div className="w-3/4">
              <div className="menu__items">
                <ul className="flex items-center gap-[26px] justify-end">
                  <li>
                    <Link className="text-[#14133B] text-[16px]" href="/">
                      Apie mus
                    </Link>
                  </li>
                  <li>
                    <Link className="text-[#14133B] text-[16px]" href="/">
                      Renginiai
                    </Link>
                  </li>
                  <li>
                    <Link className="text-[#14133B] text-[16px]" href="/">
                      Projektai
                    </Link>
                  </li>

                  <li className="relative w-[65px]">
                    <button
                      className={`text-[#14133B] text-[16px] ${
                        submenuOpen ? "font-semibold underline" : ""
                      }`}
                      onClick={toggleSubmenu}
                    >
                      Paslaugos
                    </button>

                    {submenuOpen && (
                      <ul className="absolute top-[58px] left-0 mt-2 w-[266px] bg-white shadow-lg rounded-md pt-[10px]">
                        <li className="flex justify-between items-center px-[20px]">
                          <Link
                            className="block font-inter text-[15px] font-normal text-left text-[#14133B]  py-[10px] "
                            href="/edukacija-1"
                          >
                            Scenos Techniniai Duomenys
                          </Link>
                          <svg
                            width="5"
                            height="9"
                            viewBox="0 0 5 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.86424 3.92329L1.07685 0.135964C0.989247 0.0482965 0.872312 0 0.747627 0C0.622941 0 0.506006 0.0482965 0.418408 0.135964L0.139492 0.41481C-0.0419999 0.59651 -0.0419999 0.891824 0.139492 1.07325L3.31986 4.25362L0.135964 7.43752C0.0483657 7.52518 0 7.64205 0 7.76667C0 7.89142 0.0483657 8.00829 0.135964 8.09602L0.414879 8.3748C0.502546 8.46247 0.619413 8.51077 0.744098 8.51077C0.868783 8.51077 0.985719 8.46247 1.07332 8.3748L4.86424 4.58401C4.95205 4.49607 5.00028 4.37865 5 4.25383C5.00028 4.12852 4.95205 4.01117 4.86424 3.92329Z"
                              fill="#041E42"
                            />
                          </svg>
                        </li>
                        <li className="flex justify-between items-center px-[20px]">
                          <Link
                            className="block font-inter text-[15px] font-normal text-left text-[#14133B] py-[10px] "
                            href="/edukacija-2"
                          >
                            Garso įranga
                          </Link>
                          <svg
                            width="5"
                            height="9"
                            viewBox="0 0 5 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.86424 3.92329L1.07685 0.135964C0.989247 0.0482965 0.872312 0 0.747627 0C0.622941 0 0.506006 0.0482965 0.418408 0.135964L0.139492 0.41481C-0.0419999 0.59651 -0.0419999 0.891824 0.139492 1.07325L3.31986 4.25362L0.135964 7.43752C0.0483657 7.52518 0 7.64205 0 7.76667C0 7.89142 0.0483657 8.00829 0.135964 8.09602L0.414879 8.3748C0.502546 8.46247 0.619413 8.51077 0.744098 8.51077C0.868783 8.51077 0.985719 8.46247 1.07332 8.3748L4.86424 4.58401C4.95205 4.49607 5.00028 4.37865 5 4.25383C5.00028 4.12852 4.95205 4.01117 4.86424 3.92329Z"
                              fill="#041E42"
                            />
                          </svg>
                        </li>
                        <li className="flex justify-between items-center px-[20px]">
                          <Link
                            className="block font-inter text-[15px] font-normal text-left text-[#14133B] py-[10px] "
                            href="/edukacija-2"
                          >
                            Apšvietimas
                          </Link>
                          <svg
                            width="5"
                            height="9"
                            viewBox="0 0 5 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.86424 3.92329L1.07685 0.135964C0.989247 0.0482965 0.872312 0 0.747627 0C0.622941 0 0.506006 0.0482965 0.418408 0.135964L0.139492 0.41481C-0.0419999 0.59651 -0.0419999 0.891824 0.139492 1.07325L3.31986 4.25362L0.135964 7.43752C0.0483657 7.52518 0 7.64205 0 7.76667C0 7.89142 0.0483657 8.00829 0.135964 8.09602L0.414879 8.3748C0.502546 8.46247 0.619413 8.51077 0.744098 8.51077C0.868783 8.51077 0.985719 8.46247 1.07332 8.3748L4.86424 4.58401C4.95205 4.49607 5.00028 4.37865 5 4.25383C5.00028 4.12852 4.95205 4.01117 4.86424 3.92329Z"
                              fill="#041E42"
                            />
                          </svg>
                        </li>
                        <li className="flex justify-between items-center px-[20px]">
                          <Link
                            className="block font-inter text-[15px] font-normal text-left text-[#14133B] py-[10px] "
                            href="/edukacija-2"
                          >
                            Lorem ipsum
                          </Link>
                          <svg
                            width="5"
                            height="9"
                            viewBox="0 0 5 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.86424 3.92329L1.07685 0.135964C0.989247 0.0482965 0.872312 0 0.747627 0C0.622941 0 0.506006 0.0482965 0.418408 0.135964L0.139492 0.41481C-0.0419999 0.59651 -0.0419999 0.891824 0.139492 1.07325L3.31986 4.25362L0.135964 7.43752C0.0483657 7.52518 0 7.64205 0 7.76667C0 7.89142 0.0483657 8.00829 0.135964 8.09602L0.414879 8.3748C0.502546 8.46247 0.619413 8.51077 0.744098 8.51077C0.868783 8.51077 0.985719 8.46247 1.07332 8.3748L4.86424 4.58401C4.95205 4.49607 5.00028 4.37865 5 4.25383C5.00028 4.12852 4.95205 4.01117 4.86424 3.92329Z"
                              fill="#041E42"
                            />
                          </svg>
                        </li>
                        <li className="flex justify-between items-center px-[20px]">
                          <Link
                            className="block font-inter text-[15px] font-normal text-left text-[#14133B] py-[10px] "
                            href="/edukacija-2"
                          >
                            Lorem ipsum
                          </Link>
                          <svg
                            width="5"
                            height="9"
                            viewBox="0 0 5 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.86424 3.92329L1.07685 0.135964C0.989247 0.0482965 0.872312 0 0.747627 0C0.622941 0 0.506006 0.0482965 0.418408 0.135964L0.139492 0.41481C-0.0419999 0.59651 -0.0419999 0.891824 0.139492 1.07325L3.31986 4.25362L0.135964 7.43752C0.0483657 7.52518 0 7.64205 0 7.76667C0 7.89142 0.0483657 8.00829 0.135964 8.09602L0.414879 8.3748C0.502546 8.46247 0.619413 8.51077 0.744098 8.51077C0.868783 8.51077 0.985719 8.46247 1.07332 8.3748L4.86424 4.58401C4.95205 4.49607 5.00028 4.37865 5 4.25383C5.00028 4.12852 4.95205 4.01117 4.86424 3.92329Z"
                              fill="#041E42"
                            />
                          </svg>
                        </li>
                        <li className="flex justify-between items-center px-[20px]">
                          <Link
                            className="block font-inter text-[15px] font-normal text-left text-[#14133B] py-[10px] "
                            href="/edukacija-2"
                          >
                            Lorem ipsum
                          </Link>
                          <svg
                            width="5"
                            height="9"
                            viewBox="0 0 5 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.86424 3.92329L1.07685 0.135964C0.989247 0.0482965 0.872312 0 0.747627 0C0.622941 0 0.506006 0.0482965 0.418408 0.135964L0.139492 0.41481C-0.0419999 0.59651 -0.0419999 0.891824 0.139492 1.07325L3.31986 4.25362L0.135964 7.43752C0.0483657 7.52518 0 7.64205 0 7.76667C0 7.89142 0.0483657 8.00829 0.135964 8.09602L0.414879 8.3748C0.502546 8.46247 0.619413 8.51077 0.744098 8.51077C0.868783 8.51077 0.985719 8.46247 1.07332 8.3748L4.86424 4.58401C4.95205 4.49607 5.00028 4.37865 5 4.25383C5.00028 4.12852 4.95205 4.01117 4.86424 3.92329Z"
                              fill="#041E42"
                            />
                          </svg>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <Link className="text-[#14133B] text-[16px]" href="/">
                      Paslaugos
                    </Link>
                  </li>
                  <li>
                    <Link className="text-[#14133B] text-[16px]" href="/">
                      Kolektyvai
                    </Link>
                  </li>

                  <li>
                    <Link className="text-[#14133B] text-[16px]" href="/">
                      Edukacija
                    </Link>
                  </li>

                  <li>
                    <Link className="text-[#14133B] text-[16px]" href="/">
                      Savanorystė
                    </Link>
                  </li>
                  <li>
                    <Button text={'Kontaktai'}  bg={'bg-[#2E3192]'}/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="container-fluid">
            <div className="flex justify-between items-center">
              <div className="w-1/3">
                <div className="mobile-menu__logo">
                  <img
                    src="/image/static/logo.png"
                    alt="Logo"
                    className="h-12 w-24"
                  />
                </div>
              </div>
              <div className="w-2/3 flex justify-end">
                <button
                  onClick={toggleMobileMenu}
                  className={`button-toogle ${
                    mobileMenuOpen ? "close-btn" : ""
                  }`}
                >
                  <span className="c-burger_line top"></span>
                  <span className="c-burger_line middle"></span>
                  <span className="c-burger_line bottom"></span>
                </button>
              </div>
            </div>

            {mobileMenuOpen && (
              <div className="absolute left-0 right-0 mt-4 bg-white shadow-lg rounded-md">
                <ul className="flex flex-col gap-4 py-4">
                  <li>
                    <Link className="text-[#14133B] text-[16px]" href="/">
                      Apie mus
                    </Link>
                  </li>
                  <li>
                    <Link className="text-[#14133B] text-[16px]" href="/">
                      Renginiai
                    </Link>
                  </li>
                  <li>
                    <Link className="text-[#14133B] text-[16px]" href="/">
                      Projektai
                    </Link>
                  </li>

                  <li>
                    <button
                      className="text-[#14133B] text-[16px] text-left"
                      onClick={toggleSubmenu}
                    >
                      Paslaugos
                    </button>
                    {submenuOpen && (
                      <ul className="ml-4 mt-2">
                        <li>
                          <Link
                            className="block text-[#14133B] text-[16px]"
                            href="/edukacija-1"
                          >
                            Edukacija 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="block text-[#14133B] text-[16px]"
                            href="/edukacija-2"
                          >
                            Edukacija 2
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <Link className="text-[#14133B] text-[16px]" href="/">
                      Kolektyvai
                    </Link>
                  </li>
                  <li>
                    <Link className="text-[#14133B] text-[16px]" href="/">
                      Padaliniai
                    </Link>
                  </li>
                  <li>
                    <Link className="text-[#14133B] text-[16px]" href="/">
                      Edukacija
                    </Link>
                  </li>

                  <li>
                    <Link className="text-[#14133B] text-[16px]" href="/">
                      Savanorystė
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
