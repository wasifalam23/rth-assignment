import { CheckIcon } from '@heroicons/react/24/solid';

const Steppter = (props) => {
  return (
    <ol className="relative text-gray-500 border-l border-gray-200">
      <li className="mb-20 ml-10">
        <span
          className={`absolute flex items-center justify-center w-8 h-8  rounded-full -left-4 ring-4 ring-white ${
            props.currStep > 0 ? 'bg-green-200' : 'bg-gray-100'
          }`}
        >
          {props.currStep > 0 && (
            <CheckIcon className="w-5 h-5 text-green-500" />
          )}
        </span>
        <h3 className="font-medium leading-tight">Step 1</h3>
        <p className="text-sm">Step details here</p>
      </li>
      <li className="mb-20 ml-10">
        <span
          className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white ${
            props.currStep > 1 ? 'bg-green-200' : 'bg-gray-100'
          }`}
        >
          {props.currStep > 1 && (
            <CheckIcon className="w-5 h-5 text-green-500" />
          )}
        </span>
        <h3 className="font-medium leading-tight">Step 2</h3>
        <p className="text-sm">Schooling Information</p>
      </li>
      <li className="mb-10 ml-10">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white">
          {/* icon */}
        </span>
        <h3 className="font-medium leading-tight">Step 3</h3>
        <p className="text-sm">Contact details</p>
      </li>
    </ol>
  );
};

export default Steppter;
