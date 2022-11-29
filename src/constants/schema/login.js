import * as yup from 'yup';

let login = yup.object().shape({
  email: yup
    .string()
    .min(3, 'That doesnt looks like your email')
    .typeError()
    .required(),
  password: yup
    .string()
    .min(7, 'That doesnt looks like your password')
    .typeError()
    .required(),
});
export default login;
