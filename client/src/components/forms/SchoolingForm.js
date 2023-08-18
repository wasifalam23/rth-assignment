const SchoolingForm = () => {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
      <div className="flex flex-col gap-1 col-span-2">
        <label
          htmlFor="First-Name"
          className="block text-sm font-medium text-gray-700"
        >
          Year of Passing
        </label>
        <select
          id="countries"
          class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
        >
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="gender"
          className="block text-sm font-medium text-gray-700"
        >
          Marital Status
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
              Married
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
              UnMarried
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
          htmlFor="Current Profession"
          className="block text-sm font-medium text-gray-700"
        >
          Current Profession
        </label>
        <input
          className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
          type="text"
          id="Email"
          placeholder="Enter your Current Profession"
        />
      </div>
      <div className="flex flex-col gap-1 col-span-2">
        <label
          htmlFor="Current Profession"
          className="block text-sm font-medium text-gray-700"
        >
          Profession Description
        </label>
        <textarea
          className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
          type="text"
          id="Email"
          placeholder="Enter your Current Profession"
        />
      </div>
    </div>
  );
};

export default SchoolingForm;
