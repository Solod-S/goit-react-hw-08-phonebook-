import styled from 'styled-components';
export const Name = styled.p`
  font-family: ${p => p.theme.fontFamily.roboto};
  color: ${p => p.theme.colors.secondaryText};
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Button = styled.button`
  font-family: ${p => p.theme.fontFamily.roboto};
  color: ${p => p.theme.colors.secondaryText};
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  :hover {
    color: white;
  }
`;
export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
`;
