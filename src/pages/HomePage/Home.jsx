import { useSelector } from 'react-redux';

import { Box } from 'components/Box/Box';

import image from '../../img/left.png';
import image2 from '../../img/right.png';
import logo from '../../img/app.png';

import {
  MainHeader,
  Section,
  Text,
  ImgLeft,
  ImgRigth,
  ImgLogo,
  Link,
} from './Home.styled';

const Home = () => {
  const token = useSelector(store => store.token);
  const profileEmail = useSelector(state => state.profile.email);

  return (
    <Box display="flex" justifyContent="center">
      <ImgLeft src={image} />
      {!token ? (
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
      ) : (
        <Section>
          <MainHeader>Wellcome back {profileEmail}</MainHeader>
          <ImgLogo src={logo} />
          <Text>
            Your <Link to="contacts">contacts</Link> are waiting for you
          </Text>
        </Section>
      )}
      <ImgRigth src={image2} />
    </Box>
  );
};

export default Home;
