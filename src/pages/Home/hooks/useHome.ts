import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import {
  useModal,
  useGateways,
  useDeleteGateway,
  useClearDetails,
} from '../../../utils/hooks';
import { GatewayWithId } from '../../../utils/schemas/GatewaySchema';
import { setDetails } from '../../../store/slices/detailSlice';

export const useHome = () => {
  const { isOpen, onClose, onOpen } = useModal();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { gateways, isLoading, isError, getAllGateways } = useGateways();
  const { confirmDelete, updateDelId, isDeleted } = useDeleteGateway();
  useClearDetails();

  const onAdd = () => {
    navigate('/add');
  };
  const onEdit = (gateway: GatewayWithId) => {
    dispatch(setDetails(gateway));
    navigate('/edit');
  };
  const handleDetails = (gateway: GatewayWithId) => {
    dispatch(setDetails(gateway));
    navigate('/details');
  };

  const handleOpen = (id: string) => {
    onOpen();
    updateDelId(id);
  };

  const handleDelete = () => {
    confirmDelete();
  };

  useEffect(() => {
    if (isDeleted) {
      getAllGateways();
    }
  }, [isDeleted]);

  return {
    isOpen,
    gateways,
    isLoading,
    isError,
    handleDelete,
    handleDetails,
    handleOpen,
    onClose,
    getAllGateways,
    onAdd,
    onEdit,
  };
};
