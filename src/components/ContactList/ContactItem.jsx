import React from 'react';
import PropTypes from 'prop-types';
import { notify } from 'components/Notify/notify';
// import { FaUserEdit } from 'react-icons/fa';
import { RiDeleteBinLine, RiDeleteBinFill } from 'react-icons/ri';
import { ToastContainer, Flip } from 'react-toastify';
import { useDeleteContactMutation } from 'redux/contactSlice';
import {
  Item,
  Name,
  Number,
  DeleteButton,
  // EditButton,
} from './ContactItem.styled';

// import { useDispatch } from 'react-redux';
// import { toggle } from 'redux/modalSlice';
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
        {isLoading ? <RiDeleteBinFill /> : <RiDeleteBinLine />}
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
export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
