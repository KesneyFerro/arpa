import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center h-[450px] lg:h-[600px] bg-[#fdfdfd]">
      <div className="bgFooter overflow-hidden absolute w-full top-[-130px] sm:top-[-150px]">
        <img
          src="footerBg2.png"
          alt=""
          className="w-full h-[350px] sm:h-[450px] lg:h-[600px] xl:h-[700px] 2xl:h-[780px]"
        />
      </div>
      <div className="contentFooter absolute h-full w-full bottom-0">
        <div className="decorationFooter absolute w-full h-full z-1 overflow-x-hidden overflow-y-auto mt-[-70px] mb-[50px]">
          <img
            src="/blob_background/blob_hexagonal_deco.svg"
            alt=""
            className="absolute top-[0px] right-[-100px] min-w-[200px] sm:top-[-20px] sm:right-[-100px] sm:min-w-[250px] lg:right-[-150px] lg:min-w-[350px]"
            draggable="false"
          />
          <img
            src="/blob_background/blob_turquoise.svg"
            alt=""
            className="absolute bottom-[20px] right-[10%] min-w-[60px] sm:bottom-[50px] sm:min-w-[70px] lg:right-[15%] lg:bottom-[70px]"
            draggable="false"
          />
          <img
            src="/blob_background/offset_orange_blob.svg"
            alt=""
            className="absolute top-[170px] right-[30%] min-w-[30px] sm:top-[150px] sm:min-w-[40px] lg:top-[160px] lg:min-w-[60px]"
            draggable="false"
          />
          <img
            src="/blob_background/offset_turquoise_blob.svg"
            alt=""
            className="absolute bottom-0 left-[1%] min-w-[50px] sm:bottom-[70px] sm:left-[13%] sm:min-w-[60px] lg:min-w-[110px] lg:left-[8%] lg:bottom-[80px]"
            draggable="false"
          />
          <img
            src="/blob_background/salmon.svg"
            alt=""
            className="absolute top-[110px] left-[12%] min-w-[20px] sm:top-[120px] sm:left-[8%] sm:min-w-[30px] lg:min-w-[30px] lg:left-[20%] lg:top-[200px]"
            draggable="false"
          />
          <img
            src="/blob_background/plain_red.svg"
            alt=""
            className="absolute hidden sm:block top-[280px] left-[27%] min-w-[40px] sm:top-[250px] sm:left-[33%] lg:min-w-[50px] lg:left-[29%] lg:top-[300px]"
            draggable="false"
          />
        </div>
        <div className="mainFooter absolute flex flex-col items-center justify-end  w-full h-full">
          <div className="logoFooter rounded-full bg-white h-[100px] w-[100px] shadow-lg flex  items-center justify-center lg:w-[150px] lg:h-[150px]">
            <img
              src="new_arpa_logo.svg"
              alt="logo"
              className="min-w-[29px] pr-3 lg:pr-5 lg:min-w-[45px]"
            />
          </div>
          <h3 className="text-xl text-[#032440] font-bold mt-[20px] lg:mt-[40px] lg:text-2xl">
            ESTUDE, VOCÊ CONSEGUE!
          </h3>
          <div className="mediaFooter flex flex-col sm:flex-row justify-between gap-[10px] sm:gap-[25px] my-[20px] sm:mb-[40px] sm:mt-[20px] lg:mt-[40px]">
            <div className="rowDivision1MediaFooter flex justify-center gap-[10px] sm:gap-[25px]">
              <Link
                target={"_blank"}
                href={"https://www.instagram.com/arpa2band/"}
                className="p-[20px] sm:p-[25px] shadow-lg bg-white rounded-full"
              >
                <BsInstagram className="text-[25px] sm:text-[40px] text-[#60A2F2]" />
              </Link>
              <Link
                target={"_blank"}
                href={
                  "https://www.youtube.com/channel/UCf3BKzdLV3b_7JglQJFHiqg"
                }
                className="p-[20px] sm:p-[25px] shadow-lg bg-white rounded-full"
              >
                <BsYoutube className="text-[25px] sm:text-[40px] text-[#60A2F2]" />
              </Link>
            </div>
            <div className="rowDivision2MediaFooter flex justify-center gap-[10px] sm:gap-[25px]">
              <Link
                href={"/contato"}
                className="p-[20px] sm:p-[25px] shadow-lg bg-white rounded-full"
              >
                <MdEmail className="text-[25px] sm:text-[40px] text-[#60A2F2]" />
              </Link>
              <Link
                target={"_blank"}
                href={"https://www.tiktok.com/pt-BR"}
                className="p-[20px] sm:p-[25px] shadow-lg bg-white rounded-full"
              >
                <FaTiktok className="text-[25px] sm:text-[40px] text-[#60A2F2]" />
              </Link>
            </div>
          </div>
          <hr className="my-[20px] w-[90%] h-[5px] bg-gradient-to-r from-[#152F47] via-[#185b9600] to-[#152F47] rounded-full sm:h-[7px]" />
          <div className="rightsFooter">
            <h4 className="text-center text-base text-[#032440] font-semibold mt-[20px] mb-[30px]">
              &copy; 2023 ARPA - Todos os direitos reservados
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
