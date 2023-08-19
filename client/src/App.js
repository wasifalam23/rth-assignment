import Navbar from './components/Navbar';
import AdminDashBorad from './pages/AdminDashBorad';
import AdminLogin from './pages/AdminLogin';
import RegisterUser from './pages/RegisterUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<RegisterUser />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/adminDash" element={<AdminDashBorad />} />
      </Routes>
    </BrowserRouter>
  );
}
