import { useModal } from '../../contexts/Modal';
import ModalTypes from '../ModalTypes';

export const ModalContainer = () => {
  const { modalType } = useModal();

  if (!modalType) return null;

  const Modal = ModalTypes[modalType];

  return <Modal />;
};

export default ModalContainer;
