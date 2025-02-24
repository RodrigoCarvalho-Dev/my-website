import React, { useEffect } from "react";


type CallbackType = ( event: MouseEvent  | TouchEvent  ) => void


export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  callback: CallbackType
) => {
  useEffect(() => {
    const listener = ( event: MouseEvent | TouchEvent ) => {
      // DO NOTHING if the element being clicked is the target element or their children
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
