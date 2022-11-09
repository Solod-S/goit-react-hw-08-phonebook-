import React, { useState } from 'react';

import { Formik } from 'formik';
import { schemaLogIn } from 'components/ContactForm/schema';
import { notify } from 'components/Notify/notify';
import { ToastContainer, Flip } from 'react-toastify';
import { useLoginMutation } from 'redux/contactSlice';
import { useDispatch } from 'react-redux';
import { createToken } from 'redux/TokenSlice';
import { saveProfileData } from 'redux/ProfileSlice';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {
  Title,
  ForM,
  List,
  Items,
  Label,
  Input,
  Button,
  Error,
  Text,
  ChangeForm,
} from './LogIn.styled';

import { useGetContactsQuery, useAddContactMutation } from 'redux/contactSlice';

export const LogIn = ({ setLogInToShown }) => {
  const [email] = useState('');
  const [password] = useState('');
  const [logIn] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    logIn(values)
      .unwrap()
      .then(data => {
        dispatch(createToken(data.token));
        dispatch(saveProfileData(data.user));
      })
      .then(() => navigate('/contacts'))
      .catch(() => {
        notify('errorLogIn');
      });
    // await navigate('/contacts');
    actions.resetForm();
  };

  return (
    <>
      <Title>Sign In</Title>
      <Formik
        validationSchema={schemaLogIn}
        initialValues={{ email, password }}
        onSubmit={handleSubmit}
      >
        <ForM autoComplete="off">
          <List>
            <Items>
              <Label htmlFor="email">Email</Label>

              <Input type="email" name="email" required id="email" />
              <Error name="email" component="div" />
            </Items>
            <Items>
              <Label htmlFor="password">Password</Label>
              <Input type="password" name="password" required id="password" />
              <Error name="password" component="div" />
            </Items>
          </List>
          <Button type="submit">
            {/* {isLoading ? 'Loading...' : 'Add contact'} */}
            LogIn
          </Button>
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
        </ForM>
      </Formik>
      <Text>
        Don't have an account?{' '}
        <ChangeForm type="button" onClick={() => setLogInToShown(false)}>
          Sign Up
        </ChangeForm>
      </Text>
    </>
  );
};
