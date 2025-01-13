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
          <span className="font-bold text-xl"><Link to='/'>LoneOrbit</Link></span>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-2">
          <li>
            <Link className="font-bold btn border-lime-500 " to='/'>Home</Link>
          </li>

          {!user && (
            <li>
              <NavLink className='font-bold btn border-lime-500' to='/login'>Login</NavLink>
              
            </li>
          )}
        </ul>

        {/* For large screens: Show menu inline beside Home */}
        {user && (
          <>
           <div className="lg:flex list-none items-center mx-auto ml-2  hidden lg:space-x-4"> {/* Hidden on smaller screens */}
              <li>
                <Link className='btn' to='/add_jobs'>Add Job</Link>
              </li>
              <li>
                <Link className='btn' to='/my_posted_jobs'>My Posted Jobs</Link>
              </li>
              <li>
                <Link className='btn' to='/my_bids'>My Bids</Link>
              </li>
              <li>
                <Link className='btn' to='/bid_requests'>Bid Requests</Link>
              </li>
             
            </div>
            <div className="hidden lg:block">
            <button className="ml-4 btn border-orange-600" onClick={logOut}>
                  Logout
            </button>
            </div>
          </>
            
          )}

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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 lg:hidden"
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
                <button onClick={logOut} className="bg-gray-200 block text-center btn border-orange-600">
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
