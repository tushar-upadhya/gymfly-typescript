import { motion } from "framer-motion";

import { SelectedPage } from "../../common/enums/enums";
import HText from "../../common/h1/HText";
import { BenefitType } from "../../common/interfaces/BenefitType";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "We have state of art facilities in our gym which are equipped for high intensity work",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "We have state of art facilities in our gym which are equipped for high intensity work",
  },

  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "We have state of art facilities in our gym which are equipped for high intensity work",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* header */}
        <div className="md:my-5 md:w-3/5">
          <HText>More Than Just Gym</HText>

          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>
        {/* benefits */}

        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
