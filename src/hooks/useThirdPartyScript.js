import { useState, useEffect } from 'react';

export const useThirdPartyScript = (scriptID, src) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  useEffect(() => {
    const existingScript = document.getElementById(scriptID);
    // add script if not already present
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = src;
      script.id = scriptID;
      document.body.appendChild(script);
      script.onload = () => {
        setIsScriptLoaded(true);
      };
    }
  }, [scriptID, src]);
  return isScriptLoaded;
};
