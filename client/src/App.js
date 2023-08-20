import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/auth-slice';

import useHttp from './hooks/http-hook';
import Navbar from './components/Navbar';
import AdminDashBorad from './pages/AdminDashBorad';
import AdminLogin from './pages/AdminLogin';
import RegisterUser from './pages/RegisterUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const { sendRequest: checkIsLoggedIn } = useHttp();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    const loggedInState = (data) => {
      dispatch(authActions.setIsLoggedIn(data));
    };

    checkIsLoggedIn(
      { url: `${process.env.REACT_APP_URL}/api/v1/users/isLoggedIn` },
      loggedInState
    );
  }, [dispatch, checkIsLoggedIn]);

  return (
    <BrowserRouter>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<RegisterUser />} />
        {!isLoggedIn && <Route path="/admin" element={<AdminLogin />} />}
        {isLoggedIn && <Route path="/adminDash" element={<AdminDashBorad />} />}
      </Routes>
    </BrowserRouter>
  );
}
