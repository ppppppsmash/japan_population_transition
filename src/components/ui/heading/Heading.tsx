import classes from './Heading.module.css';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  align?: 'center' | 'left' | 'right';
}

export const Heading = ({ level, children, align = 'left' }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <div className={classes.headingWrapper}>
      <Tag className={classes.heading} style={{ textAlign: align }}>
        {children}
      </Tag>
    </div>
  );
};
