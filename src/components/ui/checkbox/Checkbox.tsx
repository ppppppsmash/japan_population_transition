import classes from './Checkbox.module.css';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <div className={classes.checkbox}>
      <input type="checkbox" id="checkbox" name={label} value={label} onChange={onChange} checked={checked} />
      <label htmlFor="checkbox">
        <span />
        {label}
      </label>
    </div>
  );
};
