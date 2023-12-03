import { LayoutModal, ModalType } from '@widgets/layouts/modal';
import { ModalPlaceholders } from '@widgets/layouts/modal/modal';

import { ModalForm } from '@shared/form-components/modal-form';

interface Props {
  modalType: ModalType;
  onClose: () => void;
  isOpened: boolean;
  dispatchAction: (title: string) => void;
}

export const CreateItemModalEntity = ({ modalType, onClose, isOpened, dispatchAction }: Props) => {
  return (
    <LayoutModal modalVisible={isOpened} closeModal={onClose} type={modalType}>
      <ModalForm
        placeholder={ModalPlaceholders[modalType]}
        onCloseModal={onClose}
        dispatchAction={(title: string) => dispatchAction(title)}
      />
    </LayoutModal>
  );
};
