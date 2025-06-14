import { useState, useEffect, useRef } from 'react';

const useCountUp = (target, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const startTimeRef = useRef(null);
  const formattedTarget = typeof target === 'string' 
    ? parseInt(target.replace(/[^0-9]/g, ''), 10) 
    : target;

  useEffect(() => {
    if (typeof formattedTarget !== 'number') return;
    
    const animateCount = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * formattedTarget));
      
      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    
    requestAnimationFrame(animateCount);
    
    return () => {
      startTimeRef.current = null;
    };
  }, [formattedTarget, duration]);

  return count;
};

export default useCountUp;