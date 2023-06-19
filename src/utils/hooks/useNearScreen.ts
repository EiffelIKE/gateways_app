/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useRef, useState, useEffect } from 'react';

export const useNearScreen = () => {
  const [show, setShow] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref) {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(ref.current!);
    }
  }, [ref]);

  return { show, ref };
};
