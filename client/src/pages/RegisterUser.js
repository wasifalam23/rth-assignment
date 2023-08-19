import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Modal } from 'flowbite-react';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

import Steppter from '../components/Steppter';
import useStepForm from '../hooks/step-form';
import useHttp from '../hooks/http-hook';

import PersonalForm from '../components/forms/PersonalForm';
import SchoolingForm from '../components/forms/SchoolingForm';
import ContactForm from '../components/forms/ContactForm';

const INITIAL_DATA = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  gender: '',
  dob: '',
  yop: '',
  maritalStatus: '',
  profession: '',
  profDesc: '',
  address: '',
  city: '',
  state: '',
  pincode: '',
  memories: '',
  suggestion: '',
};

const RegisterUser = () => {
  const [useData, setUserData] = useState(INITIAL_DATA);
  const [openModal, setOpenModal] = useState();

  const { sendRequest: postData } = useHttp();

  const updateFields = (fields) => {
    setUserData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useStepForm([
      <PersonalForm {...useData} updateFields={updateFields} />,
      <SchoolingForm {...useData} updateFields={updateFields} />,
      <ContactForm {...useData} updateFields={updateFields} />,
    ]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!isLastStep) return next();
    setOpenModal('pop-up');
  };

  const resetForm = () => {
    setUserData(INITIAL_DATA);
  };

  const modalConfirmHandler = () => {
    const createdData = (data) => {
      if (data.status === 'success') {
        toast.success('User is added successfully!', { duration: 4000 });
        setOpenModal(undefined);
        resetForm();
      } else {
        toast.error(data.message);
      }
    };

    const reqConfig = {
      url: 'http://localhost:8000/api/v1/candidates',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(useData),
    };

    postData(reqConfig, createdData);
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
            <ExclamationCircleIcon className="mx-auto mb-3 h-14 w-14 text-gray-400" />
            <h3 className="mb-6 text-lg font-normal text-gray-500">
              Are you sure you want to submit your registration?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                className="bg-teal-600 text-white px-3 py-1.5 rounded-md"
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
      <div className="max-w-[60rem] px-6 mx-auto mt-24 h-[35rem]">
        <div className="h-full">
          <h1 className="text-center text-2xl font-medium text-teal-800">
            Register Your Account
          </h1>

          <form
            onSubmit={onSubmitHandler}
            className="grid grid-cols-[30fr_70fr] h-full items-center justify-center"
          >
            <div className="self-center">
              <Steppter currStep={currentStepIndex} />
            </div>
            <div className="flex flex-col gap-6">
              {step}
              <div className="flex justify-between items-center">
                {!isFirstStep && (
                  <button
                    type="button"
                    onClick={back}
                    className="bg-gray-500 text-white px-4 rounded font-medium py-1"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="bg-gray-500 text-white px-4 rounded font-medium py-1 ml-auto"
                >
                  {isLastStep ? 'Submit' : 'Save & Next'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default RegisterUser;
