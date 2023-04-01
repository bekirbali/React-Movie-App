import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MovieCard.module.scss";

const MovieCard = ({
  original_title,
  overview,
  vote_average,
  poster_path,
  id,
}) => {
  const navigate = useNavigate();
  const bgColor = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 7) {
      return "yellow";
    } else {
      return "red";
    }
  };
  console.log(bgColor(vote_average) === "yellow");
  return (
    <div className={styles.main}>
      <div
        className={`${styles["book"]} relative w-[300px]  text-white`}
        onClick={() => navigate(`/details/${id}`, { state: original_title })}
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
          className={`${styles.cover} z-10`}
        />
        <p
          className={`absolute z-0 top-0 p-2 w-full break-words pl-12 cursor-pointer`}
        >
          {overview}
        </p>
      </div>
      <div className="cursor-default flex justify-center items-center gap-2">
        {original_title}{" "}
        <h2
          style={{
            backgroundColor: `${bgColor(vote_average)}`,
            padding: "0.5rem",
            borderRadius: "50%",
            width: "2rem",
            height: "2rem",
            color: `${bgColor(vote_average) === "yellow" ? "black" : "white"}`,
            fontSize: "0.8rem",
            textAlign: "center",
          }}
        >
          {vote_average}
        </h2>
      </div>
    </div>
  );
};

export default MovieCard;
