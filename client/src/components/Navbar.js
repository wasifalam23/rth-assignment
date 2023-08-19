import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-slate-700 flex justify-between px-6 py-3 items-center">
      <h2 className="text-white font-semibold text-xl">Logo</h2>
      <ul className="flex gap-9 text-white">
        <li>
          <NavLink to="/">Register User</NavLink>
        </li>
        <li>
          <NavLink to="/admin">Admin Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
