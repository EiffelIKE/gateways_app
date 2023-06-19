import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDetails, initialState } from '../../store/slices/detailSlice';

export const useClearDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDetails(initialState.data));
  }, []);
};
