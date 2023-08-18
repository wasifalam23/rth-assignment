import React from 'react';

const PersonalForm = ({
  firstName,
  lastName,
  email,
  phone,
  gender,
  dob,
  updateFields,
}) => {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
      <div className="flex flex-col gap-1">
        <label
          htmlFor="First-Name"
          className="block text-sm font-medium text-gray-700"
        >
          First Name
        </label>
        <input
          className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
          type="text"
          id="First-Name"
          placeholder="Enter your First Name"
          value={firstName}
          onChange={(e) => updateFields({ firstName: e.target.value })}
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="Last-Name"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name
        </label>
        <input
          className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
          type="text"
          id="Last-Name"
          value={lastName}
          placeholder="Enter your Last Name"
          onChange={(e) => updateFields({ lastName: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1 col-span-2">
        <label
          htmlFor="Email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
          type="email"
          id="Email"
          value={email}
          placeholder="Enter your Email id"
          onChange={(e) => updateFields({ email: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="Contact-no"
          className="block text-sm font-medium text-gray-700"
        >
          Contact no
        </label>
        <input
          className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
          type="text"
          id="Contact-no"
          value={phone}
          placeholder="Enter your Phone no"
          onChange={(e) => updateFields({ phone: e.target.value })}
        />
      </div>
      <div>
        <label
          htmlFor="gender"
          className="block text-sm font-medium text-gray-700"
        >
          Gender
        </label>
        <div id="gender" className="flex gap-2 items-center mt-3">
          <div className="flex items-center mr-4">
            <input
              id="teal-radio"
              type="radio"
              name="colored-radio"
              value="Male"
              checked={gender === 'Male'}
              onChange={(e) => updateFields({ gender: e.target.value })}
              className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500"
            />
            <label
              htmlFor="teal-radio"
              className="ml-2 text-sm font-medium text-gray-900 "
            >
              Male
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="teal-radio"
              type="radio"
              value="Female"
              name="colored-radio"
              checked={gender === 'Female'}
              onChange={(e) => updateFields({ gender: e.target.value })}
              className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500"
            />
            <label
              htmlFor="teal-radio"
              className="ml-2 text-sm font-medium text-gray-900 "
            >
              Female
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="teal-radio"
              type="radio"
              value="Other"
              name="colored-radio"
              checked={gender === 'Other'}
              onChange={(e) => updateFields({ gender: e.target.value })}
              className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500"
            />
            <label
              htmlFor="teal-radio"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              Other
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 col-span-2">
        <label
          htmlFor="dob"
          className="block text-sm font-medium text-gray-700"
        >
          Date Of Birth
        </label>
        <input
          className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => updateFields({ dob: e.target.value })}
        />
      </div>
    </div>
  );
};
export default PersonalForm;
