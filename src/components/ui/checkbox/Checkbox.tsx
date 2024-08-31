import classes from './Checkbox.module.css';

interface CheckboxProps {
  label: string;
  index: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ label, index, onChange }: CheckboxProps) => {
  return (
    <div className={classes.checkbox}>
      <input type="checkbox" id={`checkbox-${index}`} name={label} value={label} onChange={onChange} />
      <label htmlFor={`checkbox-${index}`}>
        <span />
        {label}
      </label>
    </div>
  );
};
