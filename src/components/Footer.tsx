import logo from "../assets/Logo.png";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="lg:py-4 flex items-center justify-center bg-primary-100 py-2">
      <div className="lg:flex-row flex flex-col items-center justify-between gap-y-6 ">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>

        <div className="text-[15px]">
          &copy;{new Date().getFullYear()} All Rights Reserved || Designed and
          Coded by{" "}
          <a
            className="text-blue font-semibold  transition	hover:text-[#5A5A5A]"
            href="https://tusharupadhyay.vercel.app/"
          >
            Tushar Upadhyay
          </a>{" "}
        </div>

        <div className="flex gap-5">
          <a
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl  transition hover:text-[#5A5A5A] "
            href="https://tusharupadhyay.vercel.app/"
          >
            <AiFillGithub />
          </a>

          <a
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl  transition hover:text-[#5A5A5A]"
            href="https://tusharupadhyay.vercel.app/"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
