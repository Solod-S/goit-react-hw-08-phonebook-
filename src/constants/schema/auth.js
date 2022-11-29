import * as yup from 'yup';

let auth = yup.object().shape({
  name: yup
    .string()
    .min(3, 'That doesnt looks like your name')
    .typeError()
    .required(),
  email: yup
    .string()
    .min(3, 'That doesnt looks like your email')
    .typeError()
    .required(),
  password: yup
    .string()
    .min(7, 'That doesnt looks like good password')
    .typeError()
    .required(),
});

export default auth;
