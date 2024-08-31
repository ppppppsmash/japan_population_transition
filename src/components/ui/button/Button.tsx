import { PopulationType } from '../../../types';

import classes from './Button.module.css';

interface ButtonProps extends PopulationType {
  isSelected: boolean;
  onClick: () => void;
}

export const FilterButton = ({ label, isSelected, onClick }: ButtonProps) => {
  return (
    <button
      className={isSelected ? classes.buttonSelected : classes.button}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
