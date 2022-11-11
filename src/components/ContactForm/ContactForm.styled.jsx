import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
export const ForM = styled(Form)`
  width: 80%;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[5]}px;
`;
export const Items = styled.li`
  display: flex;
  flex-direction: column;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;
export const Input = styled(Field)`
  color: ${p => p.theme.colors.primaryText};
  font-family: ${p => p.theme.fontFamily.roboto};
  font-size: ${p => p.theme.fontSizes.m};
  padding-left: ${p => p.theme.space[3]}px;
  height: 30px;
  cursor: pointer;
  transition: outline 250ms linear, color 250ms linear;
  :hover,
  :focus {
    outline: 1px solid ${p => p.theme.colors.hoverBtnColor};
  }
`;
export const Label = styled.label`
  color: ${p => p.theme.colors.primaryText};
  font-family: ${p => p.theme.fontFamily.roboto};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeight.bolt};
  cursor: pointer;
  margin-bottom: ${p => p.theme.space[2]}px;
`;
export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border-radius: ${p => p.theme.radii.normal};
  outline: 1px solid black;
  cursor: pointer;
  color: ${p => p.theme.colors.primaryText};
  font-family: ${p => p.theme.fontFamily.roboto};
  font-size: ${p => p.theme.fontSizes.m};
  transition: transform 250ms linear, outline 250ms linear, color 250ms linear;
  :hover,
  :focus {
    color: ${p => p.theme.colors.hoverBtnColor};
    outline: 1px solid ${p => p.theme.colors.hoverBtnColor};
    transform: scale(1.1);
  }
`;
export const Error = styled(ErrorMessage)`
  color: ${p => p.theme.colors.errorMsgColor};
  font-family: ${p => p.theme.fontFamily.roboto};
  font-size: ${p => p.theme.fontSizes.s};
`;
