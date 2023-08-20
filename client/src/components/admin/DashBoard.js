import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { toast } from 'react-hot-toast';
import useHttp from '../../hooks/http-hook';

import DashBoardTableTr from './DashBoardTableTr';
import { Spinner } from 'flowbite-react';

const DashBoard = () => {
  const [candData, setCandData] = useState([]);
  const { sendRequest: fetchCandData, isLoading } = useHttp();

  const isCandDeleted = useSelector((state) => state.auth.isCandDeleted);

  useEffect(() => {
    const fetchedData = (data) => {
      if (data.status === 'success') {
        setCandData(data.data.candidates);
      } else {
        toast.error(data.message);
      }
    };

    fetchCandData(
      { url: 'http://localhost:8000/api/v1/candidates' },
      fetchedData
    );
  }, [fetchCandData, isCandDeleted]);

  return (
    <>
      {isLoading && (
        <div className="mb-2">
          <Spinner
            aria-label="Center-aligned spinner example"
            color="info"
            size="lg"
          />
        </div>
      )}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                dob
              </th>
              <th scope="col" className="px-6 py-3">
                yop
              </th>
              <th scope="col" className="px-6 py-3">
                Marital Status
              </th>
              <th scope="col" className="px-6 py-3">
                Profession
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                State
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {candData
              .map((data) => {
                return <DashBoardTableTr key={data._id} {...data} />;
              })
              .reverse()}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default DashBoard;
