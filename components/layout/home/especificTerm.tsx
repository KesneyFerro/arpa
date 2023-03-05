interface Props {
  text: string;
  strokeColor: string;
  textColor: string;
  font: string;
  src: string;
}

const Term = ({ text, strokeColor, textColor, font, src }: Props) => {
  return (
    <button
      style={{ color: textColor, borderColor: strokeColor }}
      className={`border-[1px] bg-white text-[${textColor}] text-4xl sm:text-5xl xl:text-[4rem] rounded-[50px] sm:rounded-[75px] xl:rounded-[100px] min-w-[200px] min-h-[200px] sm:min-w-[300px] sm:min-h-[300px] lg:min-w-[280px] lg:min-h-[280px] xl:min-w-[350px] xl:min-h-[350px] font-${font} flex items-center justify-center relative overflow-hidden`}
    >
      {text}
      <img src={src} alt="" className="absolute w-full h-full" />
    </button>
  );
};
export default Term;
