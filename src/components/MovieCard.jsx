import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MovieCard.module.scss";
import FavIcon from "../assets/icons/FavIcon";
import { useMovieContext } from "../context/MovieContext";

const MovieCard = ({
  original_title,
  overview,
  vote_average,
  poster_path,
  id,
  title,
}) => {
  const { addToFavorites, favorites } = useMovieContext();
  const isFavorite = favorites.some((item) => item.id === id);
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
  return (
    <div className={styles.main}>
      <div
        className={`${styles["book"]} relative w-[300px]  text-white`}
        onClick={() => navigate(`/details/${id}`, { state: original_title })}
      >
        <FavIcon
          className="absolute bottom-2 right-2 w-6 h-6 hover:scale-110 hover:cursor-pointer text-white"
          onClick={(e) => {
            e.stopPropagation();
            addToFavorites({ title, poster_path, overview, vote_average, id });
          }}
          isFavorite={isFavorite}
        />
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
