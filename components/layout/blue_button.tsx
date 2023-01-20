interface Props {
  text: string;
  paddingY: string;
  paddingX: string;
  fontWeight: string;
}

const BlueButton = ({ text, paddingY, paddingX, fontWeight }: Props) => {
  return (
    <button
      style={{
        padding: `${paddingY} ${paddingX}`,
        fontWeight: fontWeight,
      }}
      className=" bg-[#60A2F2] text-white rounded-full text-sm flex items-center justify-center"
    >
      {text}
    </button>
  );
};
export default BlueButton;
