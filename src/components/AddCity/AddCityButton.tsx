import { useState } from "react";

type AddCityButtonProps = {
  displayForm: (value: boolean) => void;
  isFormDisplayed: boolean;
}

enum buttonState {
  OPEN = 'Close city form',
  CLOSED = 'Add new city'
}

const AddCityButton = ({ displayForm, isFormDisplayed }: AddCityButtonProps ) => {
  const [buttonText, setButtonText] = useState<string>(buttonState.CLOSED);

  const handleClick = () => {
    displayForm(!isFormDisplayed);
    if(!isFormDisplayed) setButtonText(buttonState.OPEN);
    if(!!isFormDisplayed) setButtonText(buttonState.CLOSED);
  }

  return (
    <button type="button" className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2" onClick={handleClick}>
      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
      </svg>
      {buttonText}
    </button>
  )
}

export default AddCityButton;