import { useEffect, useState } from "react";

import Navbar from "./components/header/Navbar";

import { SelectedPage } from "./common/enums/enums";
import Home from "./components/Home";

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
    </div>
  );
}

export default App;
