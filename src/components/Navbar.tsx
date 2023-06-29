import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import logo from "../assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/common/enums/enums";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  // css variable
  const FLEX_BETWEEN = "flex item-center justify-between";

  return (
    <nav>
      <div className={`${FLEX_BETWEEN} fixed top-0 z-30 w-full py-6`}>
        <div className={`${FLEX_BETWEEN} mx-auto w-5/6`}>
          <div className={`${FLEX_BETWEEN} w-full gap-16`}>
            {/* left */}
            <img src={logo} alt="logo" />

            {/* right */}
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
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
