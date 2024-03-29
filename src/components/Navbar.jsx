// import { NavLink } from "react-router-dom";
// import { useAuthContext } from "../context/AuthContext";
// import { useMovieContext } from "../context/MovieContext";
// import avatar from "../assets/icons/avatar.png";
// import FavComp from "./FavComp";

// const Navbar = () => {
//   const { currentUser, logoutUser } = useAuthContext();
//   const { favorites } = useMovieContext();
//   const { getMovies } = useMovieContext();
//   const apiKey = process.env.REACT_APP_TMDB_ApiKey;
//   const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1`;
//   const getFullMovies = () => {
//     getMovies(apiUrl);
//   };
//   const fav = favorites.length;
//   return (
//     <>
//       <nav
//         className="relative flex w-full flex-wrap items-center justify-between bg-neutral-900 py-3 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start"
//         data-te-navbar-ref=""
//       >
//         <div className="flex w-full flex-wrap items-center flex-row-reverse lg:!flex-row justify-between px-6">
//           <button
//             className="block border-0 bg-transparent py-2 px-2.5 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
//             type="button"
//             data-te-collapse-init
//             data-te-target="#navbarSupportedContent4"
//             aria-controls="navbarSupportedContent4"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="[&>svg]:w-7">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 className="h-7 w-7"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </span>
//           </button>
//           <div
//             className="!visible hidden flex-grow basis-[100%] justify-end text-end lg:!flex lg:basis-auto"
//             id="navbarSupportedContent4"
//             data-te-collapse-item
//           >
//             <NavLink
//               className="pr-2 text-xl font-semibold text-white flex justify-end items-center "
//               to="/"
//               onClick={getFullMovies}
//             >
//               Fragmania
//             </NavLink>
//             {/* Left links */}
//             <ul
//               className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row place-items-end"
//               data-te-navbar-nav-ref
//             ></ul>
//             {/* Left links */}
//           </div>
//           {/* Collapsible wrapper */}

//           {/* Right elements */}
//           <div className="relative flex items-center">
//             {/* Icon */}

//             <div className="relative" data-te-dropdown-ref>
//               {/* user && username */}
//             </div>
//             <div className="relative flex gap-2" data-te-dropdown-ref="">
//               <h5>{currentUser ? currentUser : "Guest"}</h5>
//               <NavLink
//                 className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
//                 id="dropdownMenuButton2"
//                 role="button"
//                 data-te-dropdown-toggle-ref=""
//                 aria-expanded="false"
//               >
//                 <img
//                   src={currentUser?.photoURL || avatar}
//                   className="rounded-full"
//                   style={{ height: "25px", width: "25px" }}
//                   alt="user"
//                   loading="lazy"
//                   referrerPolicy="no-referrer"
//                 />
//               </NavLink>
//               <ul
//                 className="absolute left-auto right-0 z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block mt-8"
//                 aria-labelledby="dropdownMenuButton2"
//                 data-te-dropdown-menu-ref=""
//               >
//                 {currentUser ? (
//                   <>
//                     <li>
//                       <NavLink
//                         className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
//                         to="/favorites"
//                         data-te-dropdown-item-ref
//                       >
//                         <FavComp fav={fav} />
//                       </NavLink>
//                     </li>
//                     <li>
//                       <NavLink
//                         className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
//                         to="/login"
//                         data-te-dropdown-item-ref
//                         onClick={logoutUser}
//                       >
//                         Logout
//                       </NavLink>
//                     </li>
//                   </>
//                 ) : (
//                   <>
//                     <li>
//                       <NavLink
//                         className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
//                         to="/login"
//                         data-te-dropdown-item-ref
//                       >
//                         Login
//                       </NavLink>
//                     </li>
//                     <li>
//                       <NavLink
//                         className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
//                         to="/register"
//                         data-te-dropdown-item-ref
//                       >
//                         Register
//                       </NavLink>
//                     </li>
//                   </>
//                 )}
//               </ul>
//             </div>
//           </div>
//           {/* Right Elements */}
//         </div>
//       </nav>
//       {/* <div className="h-[30px]"></div> */}
//     </>
//   );
// };

// export default Navbar;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  AuthContext,
  // useAuthContext
} from "../context/AuthContext";
import avatar from "../assets/icons/avatar.png";
// import Switch from "./Switch";
import FavComp from "./FavComp";
import { MovieContext } from "../context/MovieContext";
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
} from "tw-elements-react";

const Navbar = () => {
  const { currentUser, logoutUser } = useContext(AuthContext);
  const { favorites } = useContext(MovieContext);

  const fav = favorites.length;
  return (
    <>
      <nav
        className="flex w-full flex-wrap items-center justify-between bg-neutral-100 dark:bg-gray-900 py-3 dark:text-white shadow-lg lg:flex-wrap lg:justify-start fixed top-0 z-20"
        data-te-navbar-ref=""
      >
        <div className="flex w-full flex-wrap items-center justify-between px-6">
          <Link className="pr-2 text-2xl font-semibold" to="/">
            Fragmania
          </Link>
          <div className="relative flex items-center">
            {currentUser && (
              <h5 className="mr-2 capitalize">{currentUser?.displayName}</h5>
            )}
            {/* <Switch /> */}
            <FavComp fav={fav} />
            <TEDropdown className="flex justify-center">
              <TERipple rippleColor="light">
                <TEDropdownToggle className="flex items-center ">
                  {currentUser}
                  <span
                    className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                    id="dropdownMenuButton2"
                    role="button"
                    data-te-dropdown-toggle-ref=""
                    aria-expanded="false"
                  >
                    <img
                      src={currentUser?.photoURL || avatar}
                      className="rounded-full"
                      style={{ height: 25, width: 25 }}
                      alt="user"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </span>
                </TEDropdownToggle>
              </TERipple>

              <TEDropdownMenu>
                {currentUser ? (
                  <TEDropdownItem>
                    <li
                      className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
                      onClick={() => logoutUser()}
                    >
                      Logout
                    </li>
                  </TEDropdownItem>
                ) : (
                  <>
                    <TEDropdownItem>
                      <Link
                        to="/register"
                        className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
                      >
                        Register
                      </Link>
                    </TEDropdownItem>
                    <TEDropdownItem>
                      <Link
                        to="/login"
                        refresh="true"
                        className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
                      >
                        Login
                      </Link>
                    </TEDropdownItem>
                  </>
                )}
              </TEDropdownMenu>
            </TEDropdown>
          </div>
        </div>
      </nav>
      <div className="h-[52px]"></div>
    </>
  );
};

export default Navbar;
