import 'react-toastify/dist/ReactToastify.css';
import {
  Header,
  MainHeader,
  Section,
  ImgLeft,
  ImgRigth,
} from './ContactPage.styled';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { EditContactModal } from 'components/EditContactModal/EditContactModal';
import Filter from 'components/Filter/Filter';
import image from '../../img/left.png';
import image2 from '../../img/right.png';
import { Box } from 'components/Box/Box';
import { useSelector } from 'react-redux';

const ContactPage = () => {
  const modalIsActive = useSelector(state => state.modal.isActive);

  return (
    <Box display="flex" justifyContent="center">
      <ImgLeft src={image} />
      <Section>
        {modalIsActive && <EditContactModal />}
        <MainHeader>Phonebook</MainHeader>
        <ContactForm />
        <Header>Contacts</Header>
        <Filter />
        <ContactList />
      </Section>
      <ImgRigth src={image2} />
    </Box>
  );
};

export default ContactPage;
