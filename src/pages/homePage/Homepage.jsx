// import 'react-toastify/dist/ReactToastify.css';
import {
  MainHeader,
  Section,
  Text,
  ImgLeft,
  ImgRigth,
  ImgLogo,
  Link,
} from './HomePage.styled';

import image from '../../img/left.png';
import image2 from '../../img/right.png';
import logo from '../../img/app.png';
import { Box } from 'components/Box/Box';

const HomePage = () => {
  return (
    <Box display="flex" justifyContent="center">
      <ImgLeft src={image} />
      <Section>
        <MainHeader>ContactBook</MainHeader>
        <ImgLogo src={logo} />
        <Text>
          With ContactBook, you can easily manage your contacts centrally and
          access them on all devices. ContactBook is easy contact manager app
          that helps in organizing, managing your contacts. So{' '}
          <Link to="authentication">Sign In</Link> and keep all your most
          valuable connections in ContactBook.
        </Text>
      </Section>
      <ImgRigth src={image2} />
    </Box>
  );
};

export default HomePage;
