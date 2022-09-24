import { NavLink, useNavigate, Link } from "react-router-dom";
import { useAppContext } from "./context/AppContext";
import { UserAuth } from "./context/AutContext";

const Navbar = () => {
  const { favQuantity } = useAppContext();
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e: any) {
      console.log(e.message);
    }
  };
  return (
    <div className="w-full h-[10vh] items-center bg-indigo-500 text-gray-50 flex content-center justify-evenly backdrop-blur-md hover:backdrop-blur-lg">
      <NavLink
        to="/"
        className={(activeStyle) =>
          activeStyle.isActive
            ? "mr-12 text-black font-bold hover:bg-indigo-600 p-3 transition ease-in-out delay-75 rounded-md"
            : "mr-12 text-white hover:bg-indigo-600 p-3 transition ease-in-out delay-75 rounded-md"
        }
      >
        Home Page
      </NavLink>
      <NavLink
        to="/favorites"
        className={(activeStyle) =>
          activeStyle.isActive
            ? "mr-12 text-black font-bold hover:bg-indigo-600 p-3 transition ease-in-out delay-75 rounded-md"
            : "mr-12 text-white hover:bg-indigo-600 p-3 transition ease-in-out delay-75 rounded-md"
        }
      >
        {favQuantity > 0 ? (
          <div className="absolute rounded-full bg-green-500 flex justify-center items-center w-6 h-6 ml-24 ">
            {favQuantity}
          </div>
        ) : null}
        Favorites
      </NavLink>
      {user?.email ? (
        <div>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      ) : (
        <div>
          <NavLink
            to="/signIn"
            className={(activeStyle) =>
              activeStyle.isActive
                ? "mr-12 text-black font-bold hover:bg-indigo-600 p-3 transition ease-in-out delay-75 rounded-md"
                : "mr-12 text-white hover:bg-indigo-600 p-3 transition ease-in-out delay-75 rounded-md"
            }
          >
            Sign In
          </NavLink>
          <NavLink
            to="/signUp"
            className={(activeStyle) =>
              activeStyle.isActive
                ? "mr-12 text-black font-bold hover:bg-indigo-600 p-3 transition ease-in-out delay-75 rounded-md"
                : "mr-12 text-white hover:bg-indigo-600 p-3 transition ease-in-out delay-75 rounded-md"
            }
          >
            Sign Up
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
