import { sculptureList } from "./data.js";
import { useState } from "react";
function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setIndex(index + 1);
  }
  function onShowMoreClick() {
    setShowMore(!showMore);
  }
  let sculpture = sculptureList[index];
  return (
    <>
      <div>
        <button
          className="px-4 py-2 bg-amber-600 text-white"
          onClick={handleClick}
        >
          Next
        </button>
        <h2>
          <i>{sculpture.name}</i> by {sculpture.artist}
        </h2>
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>
        <button
          className="px-4 py-2 bg-amber-600 text-white"
          onClick={onShowMoreClick}
        >
          {showMore ? "Hide" : "Show"} details
        </button>
        <p>{showMore && sculpture.description}</p>
        <img src={sculpture.url} alt={sculptureList.alt} />
      </div>
    </>
  );
}

export default Gallery;
