import { useState, useEffect } from 'react'

export const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const elementClickEvent = (e) => {
      if(el.crrent !== null && !el.current.contains(e.target)){
        setIsActive(!isActive);
      }
    };

    if(isActive) {
      window.addEventListener('click', elementClickEvent);
    }

    return () => {
      window.removeEventListener('click', elementClickEvent);
    }
  }, [isActive, el]);

  return [isActive, setIsActive];
}