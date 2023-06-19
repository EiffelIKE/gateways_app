import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

export const useScrollNav = () => {
  const [isTop, setTop] = useState<boolean>(true);

  let prevScrollY = 0;

  useEffect(() => {
    window.onscroll = throttle(() => {
      const { scrollY } = window;
      setTop(prevScrollY > scrollY);
      prevScrollY = scrollY;
    }, 500);

    return () => {
      window.onscroll = null;
    };
  }, []);

  return { isTop };
};
