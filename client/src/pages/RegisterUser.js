import { useState } from 'react';
import Steppter from '../components/Steppter';
import useMultistepForm from '../hooks/useMultistepForm';
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
  martialStatus: '',
  currProf: '',
  profDesc: '',
  address: '',
  city: '',
  state: '',
  pinCode: '',
  memories: '',
  suggestion: '',
};

const RegisterUser = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([
      <PersonalForm {...data} updateFields={updateFields} />,
      <SchoolingForm {...data} updateFields={updateFields} />,
      <ContactForm {...data} updateFields={updateFields} />,
    ]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!isLastStep) return next();
    console.log(data);
  };

  return (
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
  );
};
export default RegisterUser;
