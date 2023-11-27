import { useRef, useState, useEffect } from "react";

/**
 * Custom React hook to track whether an element is in the viewport.
 * @param {Object} options - Options for the IntersectionObserver.
 * @returns {[React.RefObject, boolean]} - Returns a ref object and a boolean indicating if the element is in the viewport.
 */
export default function useOnScreen(options) {
  // Create a ref to track the target element
  const ref = useRef(null);

  // State to track the visibility of the target element
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Create an IntersectionObserver with a callback
    const observer = new IntersectionObserver(([entry]) => {
      // Update visibility state when the target element enters the viewport
      if (entry.isIntersecting) setVisible(true);
    }, options);

    // If the target element exists, start observing it
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup the observer when the component unmounts or when the target element changes
    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]); // Dependencies include the ref and options

  // Return the ref and visibility state
  return [ref, visible];
}
