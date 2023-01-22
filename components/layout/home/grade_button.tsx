interface Props {
  title: string;
  color: string;
  backgroundColor: string;
  strokeColor: string;
  image: string;
  alt: string;
  spacing?: boolean;
}

const GradeButon = ({
  title,
  color,
  image,
  alt,
  spacing,
  backgroundColor,
  strokeColor,
}: Props) => {
  return (
    <div
      className={`grade9 flex flex-col items-center justify-center ${
        spacing && " mt-0 lg:mt-[150px] "
      } `}
    >
      <button
        className={`relative buttonGrade19 overflow-hidden transition-all ease-in-out duration-200 hover:shadow-[rgba(51, 146, 255, .5)] hover:shadow-lg hover:translate-y-[-0.75em] focus:shadow-[rgba(51, 146, 255, .5)] focus:shadow-lg focus:translate-y-[-0.75em] w-[37.5vw] h-[230px] sm:w-[250px] sm:h-[300px] lg:w-[20vw] lg:h-[400px] xl:w-[250px] flex justify-center items-end border-2 border-solid lg:border-none rounded-lg sm:rounded-xl ${
          alt == "c1" && "rounded-tl-[50px] sm:rounded-tl-[75px]"
        } ${alt == "c2" && "rounded-tr-[50px] sm:rounded-tr-[75px]"} ${
          alt == "c3" && "rounded-bl-[50px] sm:rounded-bl-[75px]"
        } ${
          alt == "c4" && "rounded-br-[50px] sm:rounded-br-[75px]"
        } lg:rounded-full`}
        style={{ backgroundColor: backgroundColor, borderColor: strokeColor }}
      >
        <div
          className="z-10 absolute overflow-hidden insideNameGrade11 flex items-center justify-center lg:hidden w-full h-[40px]  border-t-2 border-solid "
          style={{ backgroundColor: color, borderColor: color }}
        >
          <h3 className="p-10 font-semibold text-white text-xl">{title}</h3>
        </div>
        <div className="z-0 insideImage w-full h-full relative">
          {alt == "c1" && (
            <img
              src={image}
              alt={alt}
              className="absolute min-w-[160px] bottom-[calc(40%*((w-full)/236))] left-[-25%] sm:left-[-50px] sm:bottom-[-130px] lg:min-w-[270px] lg:bottom-[-100px] lg:left-[-20px] xl:left-[0px]"
              draggable="false"
            ></img>
          )}
          {alt == "c2" && (
            <img
              src={image}
              alt={alt}
              className="absolute min-w-[160px]  right-[0%] bottom-[calc(40%*((w-full)/236))] sm:bottom-[-90px] lg:scale-x-[-1] lg:right-auto lg:min-w-[270px] lg:bottom-[-40px]"
              draggable="false"
            ></img>
          )}
          {alt == "c3" && (
            <img
              src={image}
              alt={alt}
              className="absolute min-w-[160px] scale-x-[-1] bottom-[calc(40%*((w-full)/236))] left-[-25%] sm:left-[-50px] sm:bottom-[-110px] lg:left-auto lg:scale-x-[1] lg:min-w-[270px] lg:bottom-[-70px] lg:right-[-50px]"
              draggable="false"
            ></img>
          )}
          {alt == "c4" && (
            <img
              src={image}
              alt={alt}
              className="absolute min-w-[160px] scale-x-[-1] bottom-[calc(20%*(_w-full_/236))] right-[-25%] sm:right-[-50px] sm:bottom-[-135px] lg:scale-x-[1] lg:min-w-[270px] lg:bottom-[-140px] lg:left-[-50px]"
              draggable="false"
            ></img>
          )}
        </div>
      </button>
      <h3 className="hidden lg:block textGrade9 pt-10 font-semibold text-[#153046] text-2xl">
        {title}
      </h3>
    </div>
  );
};

export default GradeButon;
