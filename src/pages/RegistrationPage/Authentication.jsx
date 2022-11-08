import 'react-toastify/dist/ReactToastify.css';
import {
  AppHeader,
  MainAppHeader,
  AppSection,
  AppImgLeft,
  AppImgRigth,
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

  return (
    <Box display="flex" alignItems="end" justifyContent="center">
      <AppImgLeft src={image} />
      <AppSection>
        <Registration />
        <LogIn />
        {/* {modalIsActive && <EditContactModal />}
        <MainAppHeader>Phonebook</MainAppHeader>
        <ContactForm />
        <AppHeader>Contacts</AppHeader>
        <Filter />
        <ContactList /> */}
      </AppSection>
      <AppImgRigth src={image2} />
    </Box>
  );
};

export default AuthenticationPage;
// Registration;
