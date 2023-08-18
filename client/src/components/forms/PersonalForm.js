import React from 'react';

const PersonalForm = () => {
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
          placeholder="Enter your Last Name"
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
          type="text"
          id="Email"
          placeholder="Enter your Email id"
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
          placeholder="Enter your Email id"
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
          <div class="flex items-center mr-4">
            <input
              id="teal-radio"
              type="radio"
              value=""
              name="colored-radio"
              className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 "
            />
            <label
              for="teal-radio"
              class="ml-2 text-sm font-medium text-gray-900 "
            >
              Male
            </label>
          </div>
          <div class="flex items-center mr-4">
            <input
              id="teal-radio"
              type="radio"
              value=""
              name="colored-radio"
              className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 "
            />
            <label
              for="teal-radio"
              class="ml-2 text-sm font-medium text-gray-900 "
            >
              Female
            </label>
          </div>
          <div class="flex items-center mr-4">
            <input
              id="teal-radio"
              type="radio"
              value=""
              name="colored-radio"
              class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 "
            />
            <label
              for="teal-radio"
              class="ml-2 text-sm font-medium text-gray-900"
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
        />
      </div>
    </div>
  );
};
export default PersonalForm;
