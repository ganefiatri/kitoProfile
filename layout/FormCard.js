

 const FormCard = ({ children, currentStep, prevFormStep }) => {
    return (
        <div className='flex items-center justify-center justify-items-center w-full'>
        <div className='rounded-xl w-96 p-7 shadow-xl'>
            <h1 className='text-xl font-bold mb-6 text-indigo-900 text-center'>
                Membership Phone Number
            </h1>
        {currentStep < 3 && (
          <>
            {currentStep > 0 && (
              <button
                className=""
                onClick={prevFormStep}
                type="button"
              >
                back
              </button>
            )}
  
            <span className="">Step {currentStep + 1} of 3</span>
          </>
        )}
        {children}
      </div>
      </div>
    );
  }
  export default FormCard;