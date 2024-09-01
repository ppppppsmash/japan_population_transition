import { useState, useEffect } from 'react';

import classes from './ScrollMessage.module.css';

export const ScrollMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  const checkWindowSize = () => {
    setShowMessage(window.innerWidth <= 600);
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);

    return () => window.removeEventListener('resize', checkWindowSize);
  }, []);

  if (!showMessage) return null;

  return (
    <div className={classes.scrollMessage}>
      ↓ スクロールして全ての都道府県を表示 ↓
    </div>
  );
};
