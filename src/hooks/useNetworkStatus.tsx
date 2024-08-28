import { useState, useEffect } from 'react';

export function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);

  const checkNetwork = async () => {
    try {
      const response = await fetch('https://www.google.com/', {
        method: 'HEAD',
        mode: 'no-cors',
      });

      if (response.ok || response.type === 'opaque') {
        setIsOnline(true);
      } else {
        setIsOnline(false);
      }
    } catch (error) {
      setIsOnline(false);
    }
  };

  useEffect(() => {
    checkNetwork();
  }, []);

  return isOnline;
}