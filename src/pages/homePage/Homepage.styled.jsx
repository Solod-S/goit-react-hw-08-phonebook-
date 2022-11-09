import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
  font-weight: 700;
  color: blue;
  text-decoration: underline;
`;
export const Section = styled.section`
  padding: ${p => p.theme.space[5]}px;

  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  width: 450px;
  box-shadow: -7px 7px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%);
`;
export const MainHeader = styled.h1`
  color: ${p => p.theme.colors.primaryText};
  font-family: ${p => p.theme.fontFamily.roboto};
  font-size: 22px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const Text = styled.p`
  color: ${p => p.theme.colors.primaryText};
  font-family: ${p => p.theme.fontFamily.roboto};
  text-align: center;

  font-size: 18px;
`;
export const ImgLogo = styled.img`
  height: 200px;

  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const ImgLeft = styled.img`
  @media screen and (max-width: 1225px) {
    display: none;
  }
  position: absolute;
  bottom: 0;
  left: 0;
  height: 600px;
`;
export const ImgRigth = styled.img`
  @media screen and (max-width: 1200px) {
    display: none;
  }
  position: absolute;
  bottom: 0;
  right: 0;
  height: 600px;
`;
