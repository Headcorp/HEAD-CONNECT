import React, { useEffect, useState } from 'react'

function Loading () {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const interval = setInterval(() => {
        setIsVisible((isVisible) => !isVisible);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }, []);

  return (
    <div className="fixed top-0 z-50 h-screen w-screen flex items-center justify-center bg-white/30">
        { isVisible && <span className="text-pink text-3xl uppercase">
            Chargement...
          </span>
        }
    </div>
  )
}

export default Loading;
