import classes from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={classes.layoutWrapper}>
      <main className={classes.main}>{children}</main>
    </div>
  );
}
