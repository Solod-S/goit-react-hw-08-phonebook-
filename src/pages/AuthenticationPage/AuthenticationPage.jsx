import { useState } from 'react';

import { Registration } from 'components/Registration/Registration';
import { LogIn } from 'components/LogIn/LogIn';
import { Box } from 'components/Box/Box';

import image from '../../img/left.png';
import image2 from '../../img/right.png';

import { Section, ImgLeft, ImgRigth } from './AuthenticationPage.sttyled';

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
