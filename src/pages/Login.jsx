import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const Register = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { createUser, currentUser, setCurrentUser, signInUser } =
    useAuthContext();
  const submitHandler = (e) => {
    e.preventDefault();

    signInUser(email, password);
  };
  return (
    <div>
      <form className="w-[50%] mx-auto" onSubmit={submitHandler}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="peer"
            placeholder=" "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floating_password">Password</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="peer"
            placeholder=" "
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floating_email">Email</label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
