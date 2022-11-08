// import { useSignupMutation } from 'services/phonebookApi';
// import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { schemaAuth } from 'components/ContactForm/schema';
import { notify } from 'components/Notify/notify';
import { ToastContainer, Flip } from 'react-toastify';
import { useState } from 'react';

import {
  RegistrationForm,
  ListForRegistrationForm,
  ItemsForRegistrationForm,
  LabelForRegistrationForm,
  InputForRegistrationForm,
  ButtonForRegistrationForm,
  ErrorForRegistrationForm,
} from './Registration.styled';

// import { addToken } from 'components/redux/Actions';
// import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
// import Cookies from 'js-cookie';

export const Registration = () => {
  const [name] = useState('');
  const [password] = useState('');
  const [email] = useState('');

  const handleSubmit = (values, actions) => {
    console.log(values);
    notify('wellcome');
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
      <h1>Sign up</h1>

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

      <Formik
        validationSchema={schemaAuth}
        initialValues={{ name, password, email }}
        onSubmit={handleSubmit}
      >
        <RegistrationForm autoComplete="off">
          <ListForRegistrationForm>
            <ItemsForRegistrationForm>
              <LabelForRegistrationForm>Email</LabelForRegistrationForm>

              <InputForRegistrationForm type="email" name="email" required />
              <ErrorForRegistrationForm name="email" component="div" />
            </ItemsForRegistrationForm>
            <ItemsForRegistrationForm>
              <LabelForRegistrationForm>Name</LabelForRegistrationForm>

              <InputForRegistrationForm type="text" name="name" required />
              <ErrorForRegistrationForm name="name" component="div" />
            </ItemsForRegistrationForm>
            <ItemsForRegistrationForm>
              <LabelForRegistrationForm>Password</LabelForRegistrationForm>
              <InputForRegistrationForm
                type="password"
                name="password"
                required
              />
              <ErrorForRegistrationForm name="password" component="div" />
            </ItemsForRegistrationForm>
          </ListForRegistrationForm>
          <ButtonForRegistrationForm type="submit">
            Submit
            {/* {isLoading ? 'Loading...' : 'Add contact'} */}
          </ButtonForRegistrationForm>
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
        </RegistrationForm>
      </Formik>
      <p>
        already have an account? <button type="button">Sign In</button>
      </p>
    </>
  );
};
