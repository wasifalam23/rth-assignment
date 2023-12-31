import { useState } from 'react';

const useStepForm = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  const reset = () => {
    setCurrentStepIndex(0);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    next,
    back,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    reset,
  };
};
export default useStepForm;
