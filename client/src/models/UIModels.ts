/** UI Models */

/** Modal (Dialog) */
export interface IModal {
  isOpen: boolean;
  image: string;
  title: string;
  ariaLabel: string; // need to pass for accessability reasons
  closeHandler: () => void; // Function to close modal
  stepControl?: boolean; // If next/prev arrows should be rendered
  nextStep?: () => void; // Function for StepControl (show next item)
  prevStep?: () => void; // Function for StepControl (show prev item)
}

/** Colors variations for this project */
export type MainColors = 'primary' | 'secondary' | 'dark' | 'light' | 'cover';
