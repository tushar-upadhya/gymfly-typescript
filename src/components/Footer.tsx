import logo from "../assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 justify-center gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={logo} alt="logo" />
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            fuga obcaecati ducimus corrupti fugit ipsam.
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
