import React, { useEffect, useState } from "react";
import { MemeCard } from "./MemeCard";
import "../App.css";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShimmer] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchMemes();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    /* 
    scrolly => How much I have scrolled
    innerHeight => height of the window(visible section)
    scrollHeight => total height of the webpage
*/

    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      fetchMemes();
    }
  };
  const fetchMemes = async () => {
    try {
      setShimmer(true);
      setError(null);
      const data = await fetch("https://meme-api.com/gimme/wholesomememes/20");
      const json = await data.json();
      setShimmer(false);
      if (!Array.isArray(json.memes)) {
        console.error("json.memes is not an array:", json.memes);
        setError("Failed to fetch memes.Please try again");
        return;
      }
      setMemes((memes) => {
        return [...memes, ...json.memes]; // Explicitly return the new array
      });
    } catch (error) {
      console.error("Error fetching memes:", error);
      setShimmer(false);
      setError("Failed to fetch memes.Please try again");
    }
  };

  return (
    <div className="flex flex-wrap m-4">
      {showShimmer && <Shimmer />}
      {error && <div className="error-message">{error}</div>}
      {memes.map((meme, i) => (
        <div key={i}>
          {" "}
          <MemeCard
            key={i}
            data={meme}
          />
        </div>
      ))}
    </div>
  );
};

export default Body;
