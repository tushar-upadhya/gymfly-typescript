import { useState, useEffect } from "react";

const useMediaQuery = (query: string, initial: boolean = false) => {
  const [matches, setMatches] = useState(initial);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

    // Check the media query initially
    setMatches(media.matches);

    // Listen for changes in the media query
    media.addEventListener("change", listener);

    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
