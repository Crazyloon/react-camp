import React from "react";

export const MovieRaiting = ({raiting}) => {
  return (
    <div className="raiting">
      <span className={raiting < 6 ? "raiting-avg-bad" : "raiting-avg-good"}>{raiting}</span>
      <span className="raiting-total">/10</span>
    </div>
  );
};
