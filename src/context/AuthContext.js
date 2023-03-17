import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../auth/firebase";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  console.log(currentUser);
  const navigate = useNavigate();
  useEffect(() => {
    observeUser();
  }, []);
  // ! SIGN UP
  const createUser = async (email, password, displayName) => {
    try {
      let user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      console.log(displayName);
      updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      console.log(user.displayName);
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };
  //! SIGN UP

  // ! SIGN IN
  const signInUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  const logoutUser = async () => {
    signOut(auth);
    navigate("/login");
    setCurrentUser("");
  };

  const observeUser = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setCurrentUser(user.displayName);
      } else {
        console.log("user signed out");
      }
    });
  };
  // ! SIGN IN

  const values = {
    createUser,
    signInUser,
    observeUser,
    logoutUser,
    currentUser,
    setCurrentUser,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
