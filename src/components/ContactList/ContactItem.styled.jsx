import styled from 'styled-components';
export const Item = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: ${p => p.theme.space[3]}px;
  border-bottom: 1px solid black;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
export const Name = styled.p`
  font-family: ${p => p.theme.fontFamily.roboto};
  font-size: ${p => p.theme.fontSizes.m};
`;
export const Number = styled.p`
  font-family: ${p => p.theme.fontFamily.roboto};
  font-size: ${p => p.theme.fontSizes.m};
  margin-left: auto;
`;
export const DeleteButton = styled.button`
  display: block;
  padding: 4px;
  margin-left: ${p => p.theme.space[3]}px;
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
export const EditButton = styled.button`
  display: block;
  padding: 10px;
  margin-right: ${p => p.theme.space[3]}px;
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
