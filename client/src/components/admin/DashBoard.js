const DashBoard = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-4 py-3">
              First Name
            </th>
            <th scope="col" class="px-6 py-3">
              Last Name
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Phone
            </th>
            <th scope="col" class="px-6 py-3">
              Gender
            </th>
            <th scope="col" class="px-6 py-3">
              dob
            </th>
            <th scope="col" class="px-6 py-3">
              yop
            </th>
            <th scope="col" class="px-6 py-3">
              Marital Status
            </th>
            <th scope="col" class="px-6 py-3">
              Profession
            </th>
            <th scope="col" class="px-6 py-3">
              City
            </th>
            <th scope="col" class="px-6 py-3">
              State
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b ">
            <td className="px-4 py-4">John</td>
            <td className="px-6 py-4">Doe</td>
            <td className="px-6 py-4">john@example.io</td>
            <td className="px-6 py-4">123-456-7890</td>
            <td className="px-6 py-4">Male</td>
            <td className="px-6 py-4">Jan 15, 1985</td>
            <td className="px-6 py-4">2019</td>
            <td className="px-6 py-4">Married</td>
            <td className="px-6 py-4">Software Engineer </td>
            <td className="px-6 py-4">Anytown</td>
            <td className="px-6 py-4">California</td>
            <td className="flex items-center px-6 py-4 space-x-3">
              <button
                href="#"
                class="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default DashBoard;
