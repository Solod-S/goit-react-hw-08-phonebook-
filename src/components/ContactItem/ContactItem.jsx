import PropTypes from 'prop-types';
import { ToastContainer, Flip } from 'react-toastify';
// import { useDispatch } from 'react-redux';

import { useDeleteContactMutation } from '../../redux/slices/contactSlice';
// import { toggle } from 'redux/modalSlice';

import { RiDeleteBinLine, RiDeleteBinFill } from 'react-icons/ri';
// import { FaUserEdit } from 'react-icons/fa';

import { notify } from 'constants/notify';

import {
  Item,
  Name,
  Number,
  DeleteButton,
  // EditButton,
} from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  // const dispatch = useDispatch();
  const [deleteMaterial, { isLoading }] = useDeleteContactMutation();
  const deleteContact = ContactId => {
    deleteMaterial(ContactId);
    notify('dellContact');
  };
  // const handleEditClick = id => {
  //   dispatch(toggle(id));
  // };

  return (
    <Item>
      {/* <EditButton type="button" onClick={() => handleEditClick(id)}>
        <FaUserEdit />
      </EditButton> */}
      <Name>{name}</Name>
      <Number>{number}</Number>
      <DeleteButton type="button" onClick={() => deleteContact(id)}>
        {isLoading ? (
          <RiDeleteBinFill size={22} />
        ) : (
          <RiDeleteBinLine size={22} />
        )}
      </DeleteButton>

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
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
