import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, Flip } from 'react-toastify';

import {
  useGetContactByIdQuery,
  useUpdateContactMutation,
} from 'redux/contactSlice';
import { toggle } from 'redux/modalSlice';

import { ContactEditorForm } from '../ContactEditorForm/ContactEditorForm';
import { LoaderSpiner } from '../Loader/Loader';

import { notify } from 'constants/notify';

import { Overlay, Modal, Button } from './EditContactModal.styled';

export const EditContactModal = () => {
  const modal = useSelector(state => state.modal);
  const dispatch = useDispatch();
  const { data: contact, isLoading } = useGetContactByIdQuery(modal.id);
  const [updateMaterial] = useUpdateContactMutation();
  const closeModal = () => dispatch(toggle(null));

  const handleUpdateMaterial = async fields => {
    try {
      await updateMaterial({ id: modal.id, ...fields });
      notify('editContact');
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };
  const modalRoot = document.querySelector('#modal-root');

  return createPortal(
    <Overlay>
      <Modal>
        {isLoading && <LoaderSpiner />}

        <Button type="button" onClick={closeModal}>
          x
        </Button>
        {contact && (
          <ContactEditorForm
            initialValues={{ name: contact.name, number: contact.number }}
            onSubmit={handleUpdateMaterial}
          />
        )}
        <ToastContainer
          transition={Flip}
          theme="dark"
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        />
      </Modal>
    </Overlay>,
    modalRoot
  );
};
