import { useEffect, useState } from "react";

import { SelectedPage } from "./common/enums/enums";

import Navbar from "./components/header/Navbar";
import Home from "./components/Home";
import Benefits from "./components/benefit/Benefits";
import Classes from "./components/ourClasses/Classes";
import ContactUs from "./components/ContactUs";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [scrollNavbar, setScrollNavbar] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrollNavbar(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setScrollNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        scrollNavbar={scrollNavbar}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Home setSelectedPage={setSelectedPage} />

      <Benefits setSelectedPage={setSelectedPage} />

      <Classes setSelectedPage={setSelectedPage} />

      <ContactUs setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
