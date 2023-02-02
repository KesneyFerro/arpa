import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import BlueButton from "./blue_button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="z-10 sticky top-0 flex justify-center backdrop-blur-3xl  drop-shadow-[0_2px_14px_rgba(0,0,0,0.15)] bg-[#FDFDFD]/80 h-[100px]">
      <nav className="z-[9] flex justify-between max-w-[1500px] px-[30px]  navbar  w-full h-full ">
        <div className="visualID flex items-center">
          <div id="logo" className="mr-[10px]">
            <img
              alt="Logo Arpa"
              src="/new_arpa_logo.svg"
              className="min-w-[60px]"
            />
          </div>
          <h1 className="tracking-[.15em] text-[1.75rem] font-bold text-[#87ABD5]">
            ARPA
          </h1>
        </div>
        <ul className="hidden lg:flex menus items-center justify-center mx-10 gap-10 xl:gap-16 font-semibold text-sm">
          <li className="text-center">
            <Link href={"/"} className="text-center">
              Home
            </Link>
          </li>
          <li className="text-center">
            <Link href={"/resumo"} className="text-center">
              Resumos
            </Link>
          </li>
          <li className="text-center">
            <Link href={"/"} className="text-center">
              Conteúdos
            </Link>
          </li>
          <li className="text-center">
            <Link href={"/contato"} className="text-center">
              Contato e Perguntas
            </Link>
          </li>
          <li className="text-center">
            <Link href={"/"} className="text-center">
              Faça Parte
            </Link>
          </li>
          <li className="text-center">
            <Link href={"/"} className="text-center">
              Conheça o Projeto
            </Link>
          </li>
        </ul>
        <div className="hidden lg:flex buttonNavbar items-center drop-shadow-md">
          <BlueButton
            text="Entrar"
            paddingX="2.5rem"
            paddingY="0.75rem"
            fontWeight="600"
          />
        </div>
        <div className={`flex lg:hidden buttonNavbar items-center relative`}>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="z-[9]  flex justify-center items-center bg-[#FFFFFF] text-white min-w-[3.25rem] w-[3.25rem] h-[3.25rem] rounded-full"
          >
            <HiMenuAlt4 className="text-[#87ABD4] text-4xl" />
          </motion.button>
        </div>
      </nav>
      <div className="z-[6] lg:hidden right-[30px] top-[24px] absolute min-w-[3.25rem] w-[3.25rem] h-[3.25rem] bg-white rounded-full drop-shadow-md"></div>
      <motion.div
        style={{ originX: 1 }}
        initial={{ clipPath: "circle(0% at calc(100% - 56px) 50px)" }}
        animate={
          isOpen
            ? { clipPath: "circle(135% at calc(100% - 56px) 50px)" }
            : { clipPath: "circle(0% at calc(100% - 56px) 50px)" }
        }
        transition={{ duration: 0.5 }}
        className="z-[8] absolute bg-white/100 w-[100vw]  max-w-[100%] h-[100vh] flex justify-center items-center flex-col"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              // transition={{ delay: 0.3 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center gap-y-[10px] flex-col lg:hidden"
            >
              <h3 className="">
                <Link href={"/"}>Home</Link>
              </h3>
              <h3 className="">
                <Link href={"/resumo"}>Resumos</Link>
              </h3>
              <h3 className="">
                <Link href={"/"}>Conteúdos</Link>
              </h3>
              <h3 className="">
                <Link href={"/contato"}>Contato e Perguntas</Link>
              </h3>
              <h3 className="">
                <Link href={"/"}>Faça Parte</Link>
              </h3>
              <h3 className="mb-5">Conheça o Projeto</h3>
              <BlueButton
                text="Entrar"
                paddingX="5rem"
                paddingY="1.25rem"
                fontWeight="600"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Navbar;
