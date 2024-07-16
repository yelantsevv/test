import { useState } from 'react';

export const useDelay = (delay = 1000) => {
  const [isActive, setDelay] = useState(delay);

  const trigger = () => {
    setDelay(true);
    const id = setTimeout(() => {
      setDelay(false);
    }, 2000);
    return () => {
      clearTimeout(id);
    };
  };

  return [isActive, trigger];
};
