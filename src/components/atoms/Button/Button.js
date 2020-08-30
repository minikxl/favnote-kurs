import styled, { css } from 'styled-components';

const Button = styled.button`
  /* background-color: ${({ color }) => color || 'hsl(49, 100%, 58%)'}; */
  background-color: ${({ theme }) => theme.primary};
  width: ${({ width }) => width || '220px'};
  height: 47px;
  border: none;
  outline:none;
  border-radius: 50px;
  font-size: 16px;
  font-family: 'Montserrat';
  font-weight: 600;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(0, 0%, 90%);
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
