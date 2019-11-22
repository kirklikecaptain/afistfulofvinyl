import { useEffect } from 'react';

export default function useAnalytics() {
  useEffect(() => {
    // send page view to Segment
    window.analytics.page({
      title: window.document.title,
      url: window.location.href,
      path: window.location.pathname
    });
    // Log page views in console in staging and dev environments
    if (process.env.NODE_ENV === 'development') {
      console.log('Segment Page View: ', window.location.pathname);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
