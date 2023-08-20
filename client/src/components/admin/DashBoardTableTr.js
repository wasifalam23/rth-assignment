import { useState } from 'react';
import moment from 'moment';
import { Modal } from 'flowbite-react';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import useHttp from '../../hooks/http-hook';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';

const DashBoardTableTr = (props) => {
  const [openModal, setOpenModal] = useState();
  const { sendRequest: deleteCand } = useHttp();

  const dob = moment(props.dob).format('Do MMM YYYY');

  const dispatch = useDispatch();

  const modalConfirmHandler = () => {
    const deletedData = (data) => {
      if (data.status === 'success') {
        toast.success('Candidate deleted successfully!');
        setOpenModal(undefined);
        dispatch(authActions.candDeleted());
      } else {
        toast.success(data.message);
      }
    };

    const reqConfig = {
      url: `http://localhost:8000/api/v1/candidates/${props._id}`,
      method: 'DELETE',
    };

    deleteCand(reqConfig, deletedData);
  };

  const modalCloseHandler = () => {
    setOpenModal(undefined);
  };

  return (
    <>
      <Modal
        show={openModal === 'pop-up'}
        size="md"
        popup
        onClose={modalCloseHandler}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <ExclamationCircleIcon className="mx-auto mb-3 h-14 w-14 text-red-600" />
            <h3 className="mb-6 text-lg font-normal text-gray-500">
              Are you sure you want to delete this candidate?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                className="bg-red-600 text-white px-3 py-1.5 rounded-md"
                onClick={modalConfirmHandler}
              >
                Yes, I'm sure
              </button>
              <button
                className="bg-gray-500 text-white px-3 py-1.5 rounded-md"
                onClick={modalCloseHandler}
              >
                No, cancel
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <tr className="bg-white border-b">
        <td className="px-4 py-4">{props.firstName}</td>
        <td className="px-6 py-4">{props.lastName}</td>
        <td className="px-6 py-4">{props.email}</td>
        <td className="px-6 py-4">{props.phone}</td>
        <td className="px-6 py-4">{props.gender}</td>
        <td className="px-6 py-4">{dob}</td>
        <td className="px-6 py-4">{props.yop}</td>
        <td className="px-6 py-4">{props.maritalStatus}</td>
        <td className="px-6 py-4">{props.profession}</td>
        <td className="px-6 py-4">{props.city}</td>
        <td className="px-6 py-4">{props.state}</td>
        <td className="flex items-center px-6 py-4 space-x-3">
          <button
            type="button"
            onClick={() => setOpenModal('pop-up')}
            className="font-medium text-red-600 dark:text-red-500 hover:underline"
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
};

export default DashBoardTableTr;
