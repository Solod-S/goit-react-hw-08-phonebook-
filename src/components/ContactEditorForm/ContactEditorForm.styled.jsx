import styled from 'styled-components';
import { Form, Field } from 'formik';
export const ForM = styled(Form)`
  /* margin-bottom: ${p => p.theme.space[5]}px; */
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
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
export const Input = styled(Field)`
  color: ${p => p.theme.colors.primaryText};
  font-family: ${p => p.theme.fontFamily.roboto};
  font-size: ${p => p.theme.fontSizes.m};
  padding-left: ${p => p.theme.space[3]}px;
  height: 30px;
  cursor: pointer;
  transition: outline 250ms linear, color 250ms linear, color 250ms linear;
  :hover,
  :focus {
    /* color: ${p => p.theme.colors.hoverBtnColor}; */
    outline: 1px solid ${p => p.theme.colors.hoverBtnColor};
  }
`;
export const Label = styled.label`
  color: ${p => p.theme.colors.primaryText};
  font-family: ${p => p.theme.fontFamily.roboto};
  font-size: 20px;
  font-weight: ${p => p.theme.fontWeight.bolt};
  cursor: pointer;
  margin-bottom: ${p => p.theme.space[3]}px;
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
