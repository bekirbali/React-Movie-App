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
        movies?.results?.map((movie) => <MovieCard key={movie.id} {...movie} />)
      )}
    </>
  );
};

export default Home;
