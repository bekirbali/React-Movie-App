import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();
  const apiKey = process.env.REACT_APP_TMDB_ApiKey;
  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  const getMovieDetails = async () => {
    const { data } = await axios(movieDetailUrl);
    setMovieDetails(data);
  };
  useEffect(() => {
    getMovieDetails();
    console.log(movieDetails);
  }, []);
  return (
    <div>
      <h1>{movieDetails?.original_title}</h1>
      <p>{movieDetails?.overview}</p>
      <h2>{movieDetails?.vote_average}</h2>
    </div>
  );
};

export default MovieDetails;
