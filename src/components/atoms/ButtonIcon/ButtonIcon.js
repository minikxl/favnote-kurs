import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 67px;
  height: 67px;
  border-radius: 20px;
  border: none;
  outline: none;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40%;
  background-color: ${({ active }) => (active ? '#fff' : 'transparent')};
`;

export default ButtonIcon;
