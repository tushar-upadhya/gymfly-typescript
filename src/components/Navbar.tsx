import { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import logo from "../assets/Logo.png";

import Link from "./Link";

import { SelectedPage } from "@/common/enums/enums";

import useMediaQuery from "../hook/useMediaQuery";

import ActionButton from "../common/button/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const FLEX_BETWEEN = "flex item-center justify-between";

  const IS_ABOVED_MEDIUM_SCREENS = useMediaQuery("(min-width:1060px)");

  const [handleToggle, setHandleToggle] = useState(false);

  return (
    <nav>
      <div className={`${FLEX_BETWEEN} fixed top-0 z-30 w-full py-6`}>
        <div className={`${FLEX_BETWEEN} mx-auto w-5/6`}>
          <div className={`${FLEX_BETWEEN} w-full gap-16`}>
            {/* left */}
            <img src={logo} alt="logo" />

            {/* right */}
            {IS_ABOVED_MEDIUM_SCREENS ? (
              <div className={`${FLEX_BETWEEN} w-full`}>
                <div className={`${FLEX_BETWEEN} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                <div className={`${FLEX_BETWEEN} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2 "
                onClick={() => setHandleToggle(!handleToggle)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      {!IS_ABOVED_MEDIUM_SCREENS && handleToggle && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-sm">
          {/* close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setHandleToggle(!handleToggle)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* items */}

          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
