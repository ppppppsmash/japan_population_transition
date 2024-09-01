import classes from './Heading.module.css';

interface HeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  align?: 'center' | 'left' | 'right';
  titlePattern?: boolean;
}

export const Heading = ({
  level,
  children,
  align = 'left',
  titlePattern = false,
}: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <div
      className={`${titlePattern ? classes.titleWrapper : classes.headingWrapper}`}
    >
      <Tag
        className={`${titlePattern ? classes.title : classes.heading}`}
        style={{ textAlign: align }}
      >
        {children}
      </Tag>
    </div>
  );
};
