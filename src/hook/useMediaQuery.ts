import { useState, useEffect } from "react";

const useMediaQuery = (query: string, initial: boolean = false) => {
  // Set up a state variable to store the match result of the media query
  const [matches, setMatches] = useState(initial);

  useEffect(() => {
    // Create a MediaQueryList object based on the query
    const media = window.matchMedia(query);

    // Define a listener function to handle changes in the media query
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

    // Check the media query initially and set the initial state
    setMatches(media.matches);

    // Add the listener to listen for changes in the media query
    media.addEventListener("change", listener);

    // Clean up the listener when the component unmounts or the query changes
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  // Return the current match result of the media query
  return matches;
};

export default useMediaQuery;
