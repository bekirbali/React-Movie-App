import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { createUser, setCurrentUser } = useAuthContext();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    setCurrentUser(displayName);
    createUser(email, password, displayName);
    navigate("/login");
  };
  return (
    <div className="flex justify-center">
      {/* <div className="form-image hidden md:block">
        <img
          src={"https://picsum.photos/800/800"}
          className="object-cover h-screen w-full"
          alt="sample-movie"
        />
      </div> */}
      <div className="overflow-hidden flex-1 h-[calc(100vh-52px)] justify-center items-center dark:bg-gray-dark-main">
        <div className={`form-container mt-[5vh] w-[380px] h-[580px] `}>
          <form onSubmit={submitHandler}>
            <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
              Sign Up
            </h2>
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="floating_text"
                className="peer"
                type="text"
                required
                placeholder=" "
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label htmlFor="floating_text">First Name</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="floating_text"
                className="peer"
                type="text"
                required
                placeholder=" "
                onChange={(e) => setLastName(e.target.value)}
              />
              <label htmlFor="floating_text">Last Name</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="floating_email"
                className="peer"
                type="email"
                placeholder=" "
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floating_email">Email</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="floating_password"
                className="peer"
                type="password"
                placeholder=" "
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floating_password">Password</label>
            </div>
            <button className="btn-danger" type="submit">
              Register
            </button>
            <div className="text-center mt-5">
              <p className="text-gray-400">Already Registered?</p>
              <Link
                className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-300 hover:text-[#ff4b45]"
                to="/login"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
