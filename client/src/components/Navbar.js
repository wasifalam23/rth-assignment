import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const logoutHandler = () => {};

  return (
    <nav className="bg-slate-700 flex justify-between px-6 py-3 items-center">
      <h2 className="text-white font-semibold text-xl">Logo</h2>
      <ul className="flex gap-9 text-white">
        <li>
          <NavLink to="/">Register User</NavLink>
        </li>
        {!isLoggedIn && (
          <li>
            <NavLink to="/admin">Admin Login</NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <NavLink to="/adminDash">Admin Dashboard</NavLink>
          </li>
        )}

        {isLoggedIn && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
