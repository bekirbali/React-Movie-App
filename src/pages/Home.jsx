import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContext";
import { useAuthContext } from "../context/AuthContext";
import { toastWarnNotify } from "../helpers/ToastNotify";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useAuthContext();
  const { loading, movies, getMovies } = useMovieContext();
  const API_KEY = process.env.REACT_APP_TMDB_ApiKey;
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm && currentUser) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    } else if (!currentUser) {
      toastWarnNotify("Please log in to search a movie");
      // alert("Please log in to search a movie");
    } else {
      toastWarnNotify("Please enter a text");
      // alert("Please enter a text");
    }
  };
  return (
    <div className="p-1">
      <form className="flex justify-center p-2" onSubmit={handleSubmit}>
        <input
          type="search"
          className="w-80 h-8 rounded-md p-1 m-2 !border-cyan-700 !text-black capitalize"
          placeholder="Search a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="btn-danger-bordered !border-cyan-700 !text-cyan-700 hover:!bg-cyan-700 hover:!text-white"
          type="submit"
        >
          Search
        </button>
      </form>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex flex-wrap justify-center gap-5">
          {movies?.results?.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
