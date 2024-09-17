import React, { useEffect, useState } from "react";
import { MemeCard } from "./MemeCard";
import "../App.css";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState(null);
  useEffect(() => {
    fetchMeme();
  }, []);

  const fetchMeme = async () => {
    const data = await fetch("https://meme-api.com/gimme/wholesomememes/20");
    const json = await data.json();
    setMemes(json.memes);
  };

  return (
    <div className="flex flex-wrap">
      {!memes ? (
        <Shimmer />
      ) : (
        memes.map((meme, i) => (
          <div key={i}>
            {" "}
            <MemeCard
              key={i}
              data={meme}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Body;
