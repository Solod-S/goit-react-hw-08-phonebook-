import { useState } from 'react';
import { Formik } from 'formik';
import { ToastContainer, Flip } from 'react-toastify';

import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../redux/slices/contactSlice';

import { schema } from 'constants/schema';
import { notify } from 'constants/notify';

import {
  ForM,
  List,
  Items,
  Label,
  Input,
  Button,
  Error,
} from './ContactForm.styled';

function ContactForm() {
  const [name] = useState('');
  const [number] = useState('');
  const { data: storeContact, error } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const creatingContact = data => {
    const namesInContacts = storeContact.map(contact => contact.name);
    if (namesInContacts.includes(data.name)) {
      alert(` ${data.name} is already in contacts`);
      // если имя из входящих данных === имени в любом имеющемся контакте выдаем ошибку
    } else {
      try {
        notify('addContact');
        return addContact(data);
      } catch (errorMsg) {
        console.log(error);
      }
    }
  };

  const handleSubmit = (values, actions) => {
    creatingContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={schema.contact}
      initialValues={{ name, number }}
      onSubmit={handleSubmit}
    >
      <ForM autoComplete="off">
        <List>
          <Items>
            <Label htmlFor="name">Name</Label>

            <Input type="text" name="name" required id="name" />
            <Error name="name" component="div" />
          </Items>
          <Items>
            <Label htmlFor="tel">Number</Label>
            <Input type="tel" name="number" required id="tel" />
            <Error name="number" component="div" />
          </Items>
        </List>
        <Button type="submit">
          {isLoading ? 'Loading...' : 'Add contact'}
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
  );
}

export default ContactForm;
