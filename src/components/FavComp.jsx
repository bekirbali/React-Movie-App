import React from "react";
import { useNavigate } from "react-router-dom";
import FavIcon from "../assets/icons/FavIcon";

const FavComp = ({ fav }) => {
  let navigate = useNavigate();

  return (
    <span
      className="relative hidden-arrow mr-4 flex items-center hover:text-red-400 focus:opacity-80"
      role="button"
      onClick={() => navigate("/favorites")}
    >
      <FavIcon />
      <span className="absolute -mt-8 -right-2 top-6 rounded-full bg-red-700 py-0 px-1.5 text-xs text-white">
        {fav || null}
      </span>
    </span>
  );
};

export default FavComp;
