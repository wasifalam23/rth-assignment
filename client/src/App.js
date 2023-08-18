import Navbar from './components/Navbar';
import Steppter from './components/Steppter';
import useMultistepForm from './hooks/useMultistepForm';
import PersonalForm from './components/forms/PersonalForm';
import SchoolingForm from './components/forms/SchoolingForm';
import ContactForm from './components/forms/ContactForm';

export default function App() {
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([<PersonalForm />, <SchoolingForm />, <ContactForm />]);

  return (
    <main>
      <Navbar />

      <div className="w-1/2 mx-auto mt-24 h-[35rem]">
        <div className="h-full">
          <form className="grid grid-cols-[30fr_70fr] h-full items-center justify-center">
            <div className="self-center">
              <Steppter />
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
                  type="button"
                  onClick={next}
                  className="bg-gray-500 text-white px-4 rounded font-medium py-1 ml-auto"
                >
                  {isLastStep ? 'Finish' : 'Save & Next'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
