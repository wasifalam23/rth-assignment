import DashBoard from '../components/admin/DashBoard';

const AdminDashBorad = () => {
  return (
    <div className="max-w-[80%] mx-auto mt-20">
      <h2 className="mb-6 text-teal-700 font-medium text-2xl">
        All Registered Users
      </h2>
      <DashBoard />
    </div>
  );
};
export default AdminDashBorad;
