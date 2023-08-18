import { CheckIcon } from '@heroicons/react/24/solid';

const Steppter = () => {
  return (
    <ol class="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">
      <li class="mb-20 ml-10">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
          <CheckIcon className="w-5 h-5 text-green-500" />
        </span>
        <h3 class="font-medium leading-tight">Step 1</h3>
        <p class="text-sm">Step details here</p>
      </li>
      <li class="mb-20 ml-10">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
          {/* icon */}
        </span>
        <h3 class="font-medium leading-tight">Step 2</h3>
        <p class="text-sm">Schooling Information</p>
      </li>
      <li class="mb-10 ml-10">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
          {/* icon */}
        </span>
        <h3 class="font-medium leading-tight">Step 3</h3>
        <p class="text-sm">Contact details</p>
      </li>
    </ol>
  );
};
export default Steppter;
