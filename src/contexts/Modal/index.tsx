import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import type { modals } from '../../components/ModalTypes/types';

interface IModalContext {
  showModal: (type: modals) => void;
  handleCancel: () => void;
  isModalVisible: boolean;
  modalType: string | undefined;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const SharedModalProvider: React.FC = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState<modals | undefined>(undefined);

  const showModal = useCallback(
    (type: modals | undefined) => {
      setModalType(type);
    },
    [modalType, setIsModalVisible]
  );

  useEffect(() => {
    if (modalType) setIsModalVisible(true);
  }, [modalType, setIsModalVisible]);

  const handleCancel = () => {
    setIsModalVisible(false);
    setModalType(undefined);
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        handleCancel,
        isModalVisible,
        modalType,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
