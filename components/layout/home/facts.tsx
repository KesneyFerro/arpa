import { BiTargetLock } from "react-icons/bi";
import { HiOutlineCog } from "react-icons/hi";
import { AiOutlineTeam } from "react-icons/ai";

interface Props {
  title: string;
  number: number;
  color: string;
  children: React.ReactNode;
}

const FactBox = ({ title, number, color, children }: Props) => {
  return (
    <section className="lg:max-w-[400px] w-full h-auto bg-white rounded-[45px] lg:rounded-[75px] drop-shadow-md py-[50px] px-[30px] sm:p-[50px]">
      <div className="flex gap-x-5 items-center sm:block">
        <div
          className="iconFact min-w-[80px] w-[80px] h-[80px] flex justify-center items-center rounded-3xl"
          style={{ backgroundColor: color }}
        >
          {number == 1 && (
            <BiTargetLock className=" text-white text-[60px] font-semibold" />
          )}
          {number == 2 && (
            <HiOutlineCog className=" text-white text-[60px] font-extralight" />
          )}
          {number == 3 && (
            <AiOutlineTeam className=" text-white text-[60px] font-extralight" />
          )}
        </div>
        <h4 className="titleFact font-semibold text-2xl sm:mt-8">{title}</h4>
      </div>
      <h5 className="descriptionFact mt-7 text-md font-normal text-justify ">
        {children}
      </h5>
    </section>
  );
};
export default FactBox;
