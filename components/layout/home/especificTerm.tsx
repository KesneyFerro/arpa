interface Props {
  text: string;
  boxSize: string;
  textColor: string;
  rounded?: string;
  size?: string;
}

const Term = ({
  text,
  boxSize,
  textColor,
  rounded = "50px",
  size = "5xl",
}: Props) => {
  return (
    <button
      className={`min-w-[${boxSize}] h-[${boxSize}] border-[${textColor}] border-[1px] bg-white text-${textColor} rounded-[${rounded}] text-${size} flex items-center justify-center relative overflow-hidden`}
    >
      {text}
      <img src="" alt="" className=" absolute w-full" />
    </button>
  );
};
export default Term;
