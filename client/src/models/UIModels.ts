/** UI Models */

/** Modal (Dialog) */
export interface IModal {
  isOpen: boolean;
  image: string;
  title: string;
  ariaLabel: string; // need to pass for accessability reasons
  closeHandler: () => void;
}
