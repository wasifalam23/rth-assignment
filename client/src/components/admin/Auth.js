import { useState } from 'react';
import useHttp from '../../hooks/http-hook';
import { toast } from 'react-hot-toast';

import { authActions } from '../../store/auth-slice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const AdminAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { sendRequest: loginUser, isLoading } = useHttp();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const loggedInUserData = (data) => {
      if (data.status === 'success') {
        dispatch(authActions.setIsLoggedIn(true));
        navigate('/adminDash');
        toast.success('You have successfully logged in!');
      } else if (data.status === 'fail') {
        toast.error(data.message, { duration: 3000 });
      }
    };

    const reqConfig = {
      url: `${process.env.REACT_APP_URL}/api/v1/users/login`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    loginUser(reqConfig, loggedInUserData);
  };

  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col gap-6">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
          placeholder="example@gmail.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
          required
          placeholder="********"
        />
      </div>

      <button
        type="submit"
        className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  self-start"
      >
        {isLoading ? 'Submitting' : 'Submit'}
      </button>
    </form>
  );
};
export default AdminAuth;
