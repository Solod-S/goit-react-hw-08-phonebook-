import * as yup from 'yup';

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

export let schemaContact = yup.object().shape({
  name: yup
    .string()
    .min(3, 'That doesnt look like your name')
    .typeError()
    .required(),
  number: yup
    .string()
    .required(`You need to type a number`)
    .min(3, 'Too short')
    .max(15, 'Too long')
    .matches(phoneRegExp, 'That doesnt look like a phone number'),
});

export let schemaAuth = yup.object().shape({
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

export let schemaLogIn = yup.object().shape({
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
