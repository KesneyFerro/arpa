import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";

interface Props {
  number: number;
  link: string;
  size: string;
  padding: string;
}

const MediaButton = ({ number, link, size, padding }: Props) => {
  return (
    <Link
      target={"_blank"}
      href={link}
      className={`${padding} shadow-lg bg-white rounded-full`}
    >
      {number == 1 && <BsInstagram className={`text-[#60A2F2] ${size}`} />}
      {number == 2 && <BsYoutube className={`text-[#60A2F2] ${size}`} />}
      {number == 3 && <MdEmail className={`text-[#60A2F2] ${size}`} />}
      {number == 4 && <FaTiktok className={`text-[#60A2F2] ${size}`} />}
    </Link>
  );
};

export default MediaButton;
