import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import {
  AppHeader,
  MainAppHeader,
  Section,
  ImgLeft,
  ImgRigth,
} from './Authentication.sttyled';
import { Registration } from 'components/Registration/Registration';
import { LogIn } from 'components/LogIn/LogIn';
// import ContactForm from 'components/ContactForm/ContactForm';
// import ContactList from 'components/ContactList/ContactList';
// import { EditContactModal } from 'components/EditContactModal/EditContactModal';
// import Filter from 'components/Filter/Filter';
import image from '../../img/left.png';
import image2 from '../../img/right.png';
import { Box } from 'components/Box/Box';
import { useSelector } from 'react-redux';

const AuthenticationPage = () => {
  const modalIsActive = useSelector(state => state.modal.isActive);
  const [logInToShown, setLogInToShown] = useState(true);
  return (
    <Box display="flex" justifyContent="center">
      <ImgLeft src={image} />
      <ImgRigth src={image2} />
      <Section>
        {logInToShown ? (
          <LogIn setLogInToShown={setLogInToShown} />
        ) : (
          <Registration setLogInToShown={setLogInToShown} />
        )}

        {/* {modalIsActive && <EditContactModal />}
        <MainAppHeader>Phonebook</MainAppHeader>
        <ContactForm />
        <AppHeader>Contacts</AppHeader>
        <Filter />
        <ContactList /> */}
      </Section>
    </Box>
  );
};

export default AuthenticationPage;
// Registration;
