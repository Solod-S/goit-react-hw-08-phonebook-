import React, { useState } from 'react';

import { Formik } from 'formik';
// import schemaLogIn from './schema';
import { schemaLogIn } from 'components/ContactForm/schema';
import { notify } from 'components/Notify/notify';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  UserLogIn,
  ListForUserLogIn,
  ItemsForUserLogIn,
  LabelForUserLogIn,
  InputForUserLogIn,
  ButtonForUserLogIn,
  ErrorForUserLogIn,
} from './LogIn.styled';

import { useGetContactsQuery, useAddContactMutation } from 'redux/contactSlice';

export const LogIn = () => {
  const [email] = useState('');
  const [password] = useState('');
  //   const { data: storeContact, error } = useGetContactsQuery();
  //   const [addContact, { isLoading }] = useAddContactMutation();

  //   const creatingContact = data => {
  //     const namesInContacts = storeContact.map(contact => contact.name);
  //     if (namesInContacts.includes(data.name)) {
  //       alert(` ${data.name} is already in contacts`);
  //       // если имя из входящих данных === имени в любом имеющемся контакте выдаем ошибку
  //     } else {
  //       try {
  //         notify('addContact');
  //         return addContact(data);
  //       } catch (errorMsg) {
  //         console.log(error);
  //       }
  //     }
  //   };

  const handleSubmit = (values, actions) => {
    // creatingContact(values);
    console.log(values);
    notify('wellcome');
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={schemaLogIn}
      initialValues={{ email, password }}
      onSubmit={handleSubmit}
    >
      <UserLogIn autoComplete="off">
        <ListForUserLogIn>
          <ItemsForUserLogIn>
            <LabelForUserLogIn>Email</LabelForUserLogIn>

            <InputForUserLogIn type="email" name="email" required />
            <ErrorForUserLogIn name="email" component="div" />
          </ItemsForUserLogIn>
          <ItemsForUserLogIn>
            <LabelForUserLogIn>Password</LabelForUserLogIn>
            <InputForUserLogIn type="password" name="password" required />
            <ErrorForUserLogIn name="password" component="div" />
          </ItemsForUserLogIn>
        </ListForUserLogIn>
        <ButtonForUserLogIn type="submit">
          {/* {isLoading ? 'Loading...' : 'Add contact'} */}
          LogIn
        </ButtonForUserLogIn>
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
      </UserLogIn>
    </Formik>
  );
};
