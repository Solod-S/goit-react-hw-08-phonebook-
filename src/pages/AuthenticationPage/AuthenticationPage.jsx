import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { Section, ImgLeft, ImgRigth } from './AuthenticationPage.sttyled';
import { Registration } from 'components/Registration/Registration';
import { LogIn } from 'components/LogIn/LogIn';
import image from '../../img/left.png';
import image2 from '../../img/right.png';
import { Box } from 'components/Box/Box';

const AuthenticationPage = () => {
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
      </Section>
    </Box>
  );
};

export default AuthenticationPage;
// Registration;
