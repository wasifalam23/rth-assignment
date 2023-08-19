import { NavLink } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';
import useHttp from '../hooks/http-hook';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { sendRequest: logoutUser } = useHttp();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    const logoutStatus = (data) => {
      if (data.status === 'success') {
        toast.success('You have successfully logged out');
        navigate('/');
        dispatch(authActions.setIsLoggedIn(false));
      } else {
        toast.error('Something went wrong!');
      }
    };

    logoutUser(
      {
        url: 'http://localhost:8000/api/v1/users/logout',
      },
      logoutStatus
    );

    // navigate('/', { replace: true });
  };

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
