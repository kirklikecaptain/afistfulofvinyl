import { useEffect, useRef } from 'react';

export default function useOutsideClick(cb) {
  const ref = useRef(null);

  function handleOutsideClick(event) {
    if (!cb) {
      console.warn(
        'Outside click registered, but no callback was provided to `useOutsideClick`'
      );
      return;
    }
    if (ref.current && !ref.current.contains(event.target)) {
      cb();
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true);
    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, []);

  return ref;
}
