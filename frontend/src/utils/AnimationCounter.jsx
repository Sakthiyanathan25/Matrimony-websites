import { useRef, useEffect, useState } from "react";

export default function AnimationCounter({ id, start, end, duration }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false); // Track if the element is in the viewport

  useEffect(() => {
    const element = elementRef.current;

    // Function to check if the element is in the viewport
    const checkVisibility = () => {
      const rect = element.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
      console.log(window)
      console.log(rect.bottom)
      
      if (isInView) {
        setIsVisible(true);
      }
    };

    // Listen for scroll events to trigger visibility check
    window.addEventListener("scroll", checkVisibility);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;

    const update = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const ellaspse = timestamp - startTime;
      const progress = Math.min(ellaspse / duration, 1);

      const currentValue = Math.floor(progress * end);
      elementRef.current.innerText = progress === 1 ? `${currentValue}+` : currentValue;
      if (progress < 1) {
        window.requestAnimationFrame(update);
      }
    };

    window.requestAnimationFrame(update);
  }, [isVisible, end, duration]);

  return (
    <div
      className="md:text-6xl text-3xl font-jost text-white font-bold"
      id={id}
      ref={elementRef}
    >
      {start}
    </div>
  );
}
