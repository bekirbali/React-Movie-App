import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TopMovies from "../pages/TopMovies";
import FavoriteMovies from "../pages/FavoriteMovies";
import MovieDetails from "../pages/MovieDetails";
import AuthContextProvider from "../context/AuthContext";
import MovieContextProvider from "../context/MovieContext";
import { ToastContainer } from "react-toastify";

const AppRouter = () => {
  return (
    <AuthContextProvider>
      <MovieContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<MovieDetails />} />
          <Route path="/top-movies" element={<TopMovies />} />
          <Route path="/favorites" element={<FavoriteMovies />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ToastContainer />
      </MovieContextProvider>
    </AuthContextProvider>
  );
};
export default AppRouter;
