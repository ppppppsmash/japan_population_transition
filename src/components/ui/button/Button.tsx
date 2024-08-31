import classes from './Button.module.css';

export const FilterButton = ({ label }: { label: string }) => {
  return <button className={classes.button}>{label}</button>;
};
