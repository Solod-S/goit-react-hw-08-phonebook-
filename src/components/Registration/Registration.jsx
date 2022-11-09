// import { useSignupMutation } from 'services/phonebookApi';
// import styled from 'styled-components';
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

// import { addToken } from 'components/redux/Actions';
// import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
// import Cookies from 'js-cookie';

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
      .then(data => {
        dispatch(createToken(data.token));
        dispatch(saveProfileData(data.user));
      })
      .then(() => navigate('/contacts'))
      .catch(() => {
        notify('errorRegistration');
      });

    actions.resetForm();
  };

  //   const [signup] = useSignupMutation();
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();

  //   const handleSubmit = async evt => {
  //     const form = evt.target;
  //     const {
  //       name: { value: name },
  //       email: { value: email },
  //       password: { value: password },
  //     } = form;

  //     const credentials = { name, email, password };
  //     evt.preventDefault();
  //     await signup(credentials)
  //       .unwrap()
  //       .then(({ token }) => Cookies.set('token', token))
  //       .then(() => navigate('/contacts'))
  //       .catch(() => {
  //         toast.warn('User with this email address already exists');
  //       });
  //     const token = Cookies.get('token');
  //     dispatch(addToken(token));

  //     form.reset();
  //   };

  return (
    <>
      {/* <form
      //   onSubmit={handleSubmit}
      >
        <label>
          <input
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter your e-mail address (example: characters@characters.domain)"
            required
            placeholder=" "
          />
          <span>Email</span>
        </label>

        <label>
          <input
            type="text"
            name="name"
            title="Please enter your name"
            required
            placeholder=" "
          />
          <span>Name</span>
        </label>

        <label>
          <input
            type="password"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
            placeholder=" "
          />
          <span>Password</span>
        </label>

        <button type="submit">Sign up</button>
      </form> */}
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
          <Button type="submit">
            {isLoading ? 'Loading...' : 'Submit'}

            {/* {isLoading ? 'Loading...' : 'Add contact'} */}
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
        Already have an account?{' '}
        <ChangeForm type="button" onClick={() => setLogInToShown(true)}>
          Sign In
        </ChangeForm>
      </Text>
    </>
  );
};
