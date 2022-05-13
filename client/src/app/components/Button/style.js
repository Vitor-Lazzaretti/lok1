import styled from 'styled-components';

export const ButtonStyle = styled.button.attrs(props => ({
  primary: props.primary || false,
  secondary: props.secundary || true,
}))`
  min-width: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 13px 21px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
  border-radius: 3px;
  background-color: ${props => props.primary ? '#7bed09' : 'inherit' };
  border: none;
  color: ${props => props.primary ? '#000' : '#fff' };
  transition: 0.15s linear all;
  text-decoration: none;

  &:hover {
    background-color: #005418; // #00FA9A // #7CFC00 // #44D7A8
    color: #fff;
  }
`;