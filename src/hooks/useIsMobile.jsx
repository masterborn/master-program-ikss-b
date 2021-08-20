import { useEffect, useState } from 'react';

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.matchMedia('(max-width: 600px)').matches);
  };

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 600px)').matches);
    window.addEventListener('resize', handleResize);
  }, []);
  return isMobile;
}
