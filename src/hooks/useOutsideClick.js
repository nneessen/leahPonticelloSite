import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapture = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapture);
      // must pass 'true' in order to be able to reclick again on the show modal button

      return () =>
        document.removeEventListener("click", handleClick, listenCapture);
    },
    [handler, listenCapture],
  );
  return { ref, handler };
}
