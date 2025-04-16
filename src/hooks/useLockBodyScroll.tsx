// https://usehooks.com/useLockBodyScroll/
import { useLayoutEffect } from "react";

export default () => {
  useLayoutEffect(() => {
    // original overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // prevent scrolling
    document.body.style.overflow = "hidden";
    return () => {
      // add original overflow
      document.body.style.overflow = originalStyle;
    };
  }, []); // run only on mount and unmount
}
