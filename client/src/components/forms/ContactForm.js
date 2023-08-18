const ContactForm = () => {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
      <div className="flex flex-col gap-1 col-span-2">
        <label
          htmlFor="Address"
          className="block text-sm font-medium text-gray-700"
        >
          Address
        </label>
        <input
          className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
          type="text"
          id="Address"
          placeholder="Enter your Street Address 1"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="City"
          className="block text-sm font-medium text-gray-700"
        >
          City
        </label>
        <input
          className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
          type="text"
          id="City"
          placeholder="Enter your Last Name"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="State"
          className="block text-sm font-medium text-gray-700"
        >
          State
        </label>
        <input
          className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
          type="text"
          id="State"
          placeholder="Enter your State"
        />
      </div>
      <div className="flex flex-col gap-1 col-span-2">
        <label
          htmlFor="Pin-Code"
          className="block text-sm font-medium text-gray-700"
        >
          Pincode
        </label>
        <input
          className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
          type="text"
          id="Pin-Code"
          placeholder="Enter your Pincode"
        />
      </div>
      <div className="flex flex-col gap-1 col-span-2">
        <label
          htmlFor="Pin-Code"
          className="block text-sm font-medium text-gray-700"
        >
          Fondest memories of life @ School
        </label>
        <textarea
          className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
          type="text"
          id="Pin-Code"
          placeholder="Enter your fondest memories of life @ school"
        />
      </div>
      <div className="flex flex-col gap-1 col-span-2">
        <label
          htmlFor="Pin-Code"
          className="block text-sm font-medium text-gray-700"
        >
          Suggestion
        </label>
        <textarea
          className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
          type="text"
          id="Pin-Code"
          placeholder="Enter your suggestion"
        />
      </div>
    </div>
  );
};
export default ContactForm;
