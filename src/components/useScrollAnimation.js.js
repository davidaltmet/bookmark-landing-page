import { useState, useEffect, useRef } from "react";

const useScrollAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect().top;
        const isVisible = rect <= window.innerHeight;
        if (isVisible) {
          setShowAnimation(true);
        }
      }
    };

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return { sectionRef, showAnimation };
};

export default useScrollAnimation;
