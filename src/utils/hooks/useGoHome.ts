import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useGoHome = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goHome = useCallback(() => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  }, [location.pathname]);

  return goHome;
};
