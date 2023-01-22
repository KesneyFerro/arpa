import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { HomeCointainer } from "../styles/components/home";
import { BsCaretDownFill } from "react-icons/bs";

import Navbar from "../components/layout/navbar";
import GradeButon from "../components/layout/home/grade_button";
import FactBox from "../components/layout/home/facts";
import BlueButton from "../components/layout/blue_button";

const Home: NextPage = () => {
  return (
    <HomeCointainer>
      <Head>
        <title>Arpa</title>
        <meta
          name="Projeto Arpa"
          content="Site que tem por objetivo o compartilhamento de resumos visando facilitar o processo de aprendizado"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar />

      <main className="mt-[70px]">
        <div className="contentHomePage relative">
          <div className="absolute w-full h-full z-[0] mt-10">
            <img
              src="/blob_background/red_stripes.svg"
              alt=""
              className="top-28 left-[5%] absolute w-[50px]"
              draggable="false"
            />
            <img
              src="/blob_background/blue.svg"
              alt=""
              className="top-[380px] left-[15%] absolute w-[20px]"
              draggable="false"
            />
            <img
              src="/blob_background/yellow_offset_outline.svg"
              alt=""
              className="bottom-[250px] left-[3%] absolute w-[80px]"
              draggable="false"
            />
            <img
              src="/blob_background/red_offset_outline.svg"
              alt=""
              className="bottom-[160px] right-[7%] absolute w-[95px]"
              draggable="false"
            />
            <img
              src="/blob_background/black.svg"
              alt=""
              className="top-[100px] right-[10%] absolute w-[20px]"
              draggable="false"
            />
            <img
              src="/blob_background/green_outline.svg"
              alt=""
              className="top-[200px] left-[28%] absolute w-[40px]"
              draggable="false"
            />
            <img
              src="/blob_background/dark_blue.svg"
              alt=""
              className="top-[280px] right-[38%] absolute w-[35px]"
              draggable="false"
            />
            <img
              src="/blob_background/salmon.svg"
              alt=""
              className="bottom-[150px] right-[31%] absolute w-[25px]"
              draggable="false"
            />
          </div>
          <div className="homeTitle flex justify-center items-center flex-col ">
            <h2 className="font-bold text-5xl text-center px-5 z-[1]">
              Bem vindo ao ARPA
            </h2>
            <h3 className="font-medium mt-1 pt-3 text-center px-5 z-[1]">
              Resumos e Aulas de revisão para alunos do <br />
              <span className="text-[#7E2626]">Colégio Bandeirantes</span>
            </h3>
          </div>

          <div className="homeButtons px-3 mt-5 flex flex-wrap items-center justify-center gap-5 drop-shadow-md">
            <BlueButton
              text="Estude Agora"
              paddingX="1.47rem"
              paddingY="1.1rem"
              fontWeight="400"
            />
            <button className="yourYoutube w-[140px] max-h-[55px] py-6 bg-white text-[#153046] rounded-full font-normal text-sm flex items-center justify-center gap-3">
              <div className="youtubePlay w-9 h-9 bg-[#D4E8FF] rounded-full flex items-center justify-center">
                <BsCaretDownFill className="rotate-[270deg] text-2xl text-[#60A2F2] ml-1" />
              </div>
              Youtube
            </button>
          </div>
          <div className="homeGrades mx-5 mt-[50px] lg:mt-0 flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-[25px] xl:gap-[50px] drop-shadow-md">
            <div className="gradesRow1 flex flex-row justify-center items-center gap-3 lg:gap-[25px] xl:gap-[50px]">
              <GradeButon
                title="9°EF"
                alt="c1"
                image="/c1.png"
                color="#66ADFF"
                strokeColor="#3392FF"
                backgroundColor="#AFD4FF"
              />
              <GradeButon
                title="1°EM"
                alt="c2"
                image="/c2.png"
                color="#FFB966"
                strokeColor="#FFA133"
                backgroundColor="#FFE1BE"
                spacing
              />
            </div>
            <div className="gradesRow2 flex flex-row justify-center items-center gap-3 lg:gap-[25px] xl:gap-[50px]">
              <GradeButon
                title="2°EM"
                alt="c3"
                image="/c3.png"
                color="#6B9FC7"
                strokeColor="#6B9FC7"
                backgroundColor="#D2E2EE"
                spacing
              />
              <GradeButon
                title="3°EM"
                alt="c4"
                image="/c4.png"
                color="#B87A7A"
                strokeColor="#B87A7A"
                backgroundColor="#DEC1C1"
              />
            </div>
          </div>
        </div>

        <div className="contentHomeAboutUs relative my-[100px] w-full flex items-center flex-col">
          <div className="absolute w-full h-full z-[0] mt-24">
            <img
              src="/blob_background/black_stripes.svg"
              alt=""
              className="top-28 left-[2%] absolute w-[80px] lg:w-[120px] lg:top-[70px] xl:w-[140px] xl:top-[20px]"
              draggable="false"
            />
            <img
              src="/blob_background/red_trail_yellow.svg"
              alt=""
              className="bottom-[0px] left-[-5%] absolute w-[130px] lg:w-[180px] lg:left-[-6%] xl:w-[190px] xl:left-[-2%]"
              draggable="false"
            />
            <img
              src="/blob_background/red_trail_green.svg"
              alt=""
              className=" top-[20px] right-0 absolute w-[150px] lg:w-[170px]  lg:top-[-10px] xl:w-[180px]  xl:top-[-50px]"
              draggable="false"
            />
            <img
              src="/blob_background/green.svg"
              alt=""
              className="bottom-[350px] right-[2%] absolute w-[70px] lg:bottom-[160px]"
              draggable="false"
            />
          </div>

          <div className="aboutUsTitle flex justify-center items-center flex-col">
            <h3 className="font-medium text-base text-[#7E2626] text-center">
              CONHEÇA O PROJETO
            </h3>
            <h2 className="font-bold text-5xl text-center mt-5">Sobre nós</h2>
          </div>

          <div className="max-w-[1300px] px-5 sm:px-10 factAboutUs flex flex-col mt-16 lg:flex-row w-full justify-between items-center  gap-10">
            <FactBox title="Nosso Objetivo" number={1} color={"#5BA7FF"}>
              O ARPA é um projeto criado para auxiliar alunos do Band nos
              estudos e provas. Acreditamos que “
              <span className="text-[#7E2626]">
                Um fio não dá conta sozinho
              </span>
              ” e, por isso, nos unimos voluntariamente{" "}
              <span className="text-[#7E2626]">por um Band melhor</span>.
            </FactBox>

            <FactBox title="Como Funciona" number={2} color={"#FF7E35"}>
              Realizamos{" "}
              <span className="text-[#7E2626]">resumos e vídeo-aulas</span> para
              te ajudar nas avaliações do colégio, afinal sabemos como é
              difícil. Todo esse conteúdo incrível pode ser encontrado no nosso{" "}
              <span className="text-[#7E2626]">
                <a className="underline">site</a>
              </span>
              , canal do{" "}
              <span className="text-[#7E2626]">
                <a className="underline">youtube</a>
              </span>{" "}
              e{" "}
              <span className="text-[#7E2626]">
                <a className="underline">instagram</a>
              </span>
              .
            </FactBox>

            <FactBox title="Faça Parte" number={3} color={"#D23636"}>
              Nossa equipe é composta por alunos interessados em colaborar com a
              comunidade do Bandeirantes. Durante o ano,{" "}
              <span className="text-[#7E2626]">
                <a className="underline">abrimos vagas para monitores</a>
              </span>{" "}
              realocando membros em suas respectivas séries.
            </FactBox>
          </div>
        </div>

        <div className="invitationJoinUs overflow-hidden mt-[200px] w-full h-[800px] bg-[#032440] shadow-[0_-35px_0px_0px_#04121E] rounded-tl-[100px] flex flex-col lg:flex-row">
          <div className="invDivision1 flex flex-col justify-start items-start sm:justify-center sm:items-center mt-[70px] mx-[50px] sm:mx-[100px] z-[1]">
            <div className="mainInvDiv1">
              <h3 className="text-white w-full font-semibold text-2xl flex flex-col  items-center sm:text-center">
                Gostou da Proposta???{" "}
                <span className="my-[15px] block h-[4px] w-full bg-gradient-to-r from-[rgba(97,163,217,1)] to-[rgba(24,92,150,0)] rounded-full sm:text-center" />
              </h3>
              <h4 className="text-white text-sm font-extralight text-justify mt-[15px] sm:text-center">
                Quanto mais ajuda melhor! O ARPA está de portas abertas para
                você. Se for bom em fazer resumos ou dar aulas, entre para o
                ARPA!
                <br />
                <br />
                Preencha o formulário e faça parte do projeto.
              </h4>
            </div>
            <button className="buttonInvDiv1 mt-[50px] bg-white rounded-full font-semibold text-lg text-[#153046] px-[20px] py-[15px] mb-[50px]">
              Junte-se a nós
            </button>
          </div>
          <div className="invDivision2 relative w-full h-full z-[0]">
            <img
              src="teamIllustration.svg"
              alt=""
              className="h-[600px] absolute right-0 top-[-200px]"
              draggable="false"
            />
            <div className="invDiv2Decoration absolute w-full h-full z-[0]">
              <img
                src="/blob_background/overlaping circles.svg"
                alt=""
                className="top-0 left-0 absolute w-[200px]"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </main>
    </HomeCointainer>
  );
};

export default Home;
