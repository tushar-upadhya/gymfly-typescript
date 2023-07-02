import logo from "../assets/Logo.png";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 justify-center gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            fuga obcaecati ducimus corrupti fugit ipsam.
          </p>

          <p>
            © <a href="">tushar upadhyay</a> All Rights Reserved.
          </p>
        </div>

        <div className="flex basis-1/4 gap-8 md:mt-0">
          <h4 className="font-bold">Links</h4>

          <a
            href="https://github.com/tushar-upadhya"
            target="_blank"
            className="my-5"
          >
            <AiFillGithub className="text-2xl" />
          </a>
          <a
            href="https://github.com/tushar-upadhya"
            target="_blank"
            className="my-5"
          >
            <AiFillLinkedin className="text-2xl" />
          </a>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Hathras, INDIA</p>
          <p>(+91)1234567890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
