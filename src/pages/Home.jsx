import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContext";

const Home = () => {
  const { loading, movies, setMovies } = useMovieContext();
  console.log(movies);
  return (
    <>
      <form action=""></form>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex flex-wrap justify-around">
          {movies?.results?.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
