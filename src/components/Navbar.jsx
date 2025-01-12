import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import loginJpg from '../images/login.jpg'



const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <img
            className="w-auto h-7"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/LO-emblem.svg/2056px-LO-emblem.svg.png"
            alt=""
          />
          <span className="font-bold">LoneOrbit</span>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to='/'>Home</Link>
          </li>

          {!user && (
            <li>
              <div><NavLink to='/login'>Login</NavLink></div>
              
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full" title={user?.displayName}>
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL} //if user is avil then show img
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to='/add_jobs' className="justify-between">Add Job</Link>
              </li>
              <li>
                <Link to='/my_posted_jobs'>My Posted Jobs</Link>
              </li>
              <li>
                <Link to='my_bids'>My Bids</Link>
              </li>
              <li>
                <Link to='/bid_requests'>Bid Requests</Link>
              </li>
              <li className="mt-2">
                <button onClick={logOut} className="bg-gray-200 block text-center">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
