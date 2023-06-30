import { SelectedPage } from "../common/enums/enums";

import useMediaQuery from "../hook/useMediaQuery";

import ActionButton from "../common/button/ActionButton";

import HomeImage from "../assets/HomePageText.png";
import HomeGraphicImage from "../assets/HomePageGraphic.png";
import RedBullImage from "../assets/SponsorRedBull.png";
import ForbesImage from "../assets/SponsorForbes.png";
import FortuneImage from "../assets/SponsorFortune.png";

import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const IS_ABOVE_MEDIUM_SCREEN = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* image & main-header */}

      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* main-header */}

        <div className="md:basis-3/3 z-10 mt-32">
          {/* heading */}

          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-evolveText">
                <img src={HomeImage} alt="HomeImage" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>
          {/* action */}

          <div className="mt-8 flex items-center gap-8 ">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join NOW
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        {/* image */}

        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomeGraphicImage} alt="HomeGraphicImage" />
        </div>
      </div>
      {/* sponsors */}

      {IS_ABOVE_MEDIUM_SCREEN && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6 ">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={ForbesImage} alt="ForbesImage" />
              <img src={FortuneImage} alt="FortuneImage" />
              <img src={RedBullImage} alt="RedBullImage" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
