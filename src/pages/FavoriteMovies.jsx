import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const FavoriteMovies = () => {
  const { favorites } = useMovieContext();
  return (
    <div className="flex justify-center flex-wrap gap-3 mt-3 ">
      {favorites.length
        ? favorites.map((movie) => <MovieCard key={movie.id} {...movie} />)
        : "You don't have any favorite movie yet"}
    </div>
  );
};

export default FavoriteMovies;
