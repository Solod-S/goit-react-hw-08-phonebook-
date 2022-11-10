import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { schemaAuth } from 'components/ContactForm/schema';
import { notify } from 'components/Notify/notify';
import { ToastContainer, Flip } from 'react-toastify';
import { useState } from 'react';
import { useSignupMutation } from 'redux/contactSlice';
import { useDispatch } from 'react-redux';
import { createToken } from 'redux/TokenSlice';
import { saveProfileData } from 'redux/ProfileSlice';
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
} from './Registration.styled';

export const Registration = ({ setLogInToShown }) => {
  const [name] = useState('');
  const [password] = useState('');
  const [email] = useState('');
  const navigate = useNavigate();
  const [signUp, { isLoading }] = useSignupMutation();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    signUp(values)
      .unwrap()
      .then(({ token, user }) => {
        dispatch(createToken(token));
        dispatch(saveProfileData(user));
      })
      .then(() => navigate('/contacts'))
      .catch(() => {
        notify('errorRegistration');
      });

    actions.resetForm();
  };

  return (
    <>
      <Title>Sign Up</Title>
      <Formik
        validationSchema={schemaAuth}
        initialValues={{ name, password, email }}
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
              <Label htmlFor="name">Name</Label>

              <Input type="text" name="name" required id="name" />
              <Error name="name" component="div" />
            </Items>
            <Items>
              <Label htmlFor="password">Password</Label>
              <Input type="password" name="password" required id="password" />
              <Error name="password" component="div" />
            </Items>
          </List>
          <Button type="submit">{isLoading ? 'Loading...' : 'Submit'}</Button>
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
        Already have an account?{' '}
        <ChangeForm type="button" onClick={() => setLogInToShown(true)}>
          Sign In
        </ChangeForm>
      </Text>
    </>
  );
};
