interface Props {
  text: string;
  paddingY: string;
  paddingX: string;
  fontWeight: string;
  fontSize?: string;
}

const BlueButton = ({
  text,
  paddingY,
  paddingX,
  fontWeight,
  fontSize = "sm",
}: Props) => {
  return (
    <button
      style={{
        padding: `${paddingY} ${paddingX}`,
        fontWeight: fontWeight,
      }}
      className={`bg-[#60A2F2] text-white rounded-full text-${fontSize} flex items-center justify-center`}
    >
      {text}
    </button>
  );
};
export default BlueButton;
