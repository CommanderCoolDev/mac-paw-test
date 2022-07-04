import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import styled from 'styled-components';

const Logo = () => {
  return (
    <Link to="/">
      <LogoImg src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;

//=========Styled===========//
const LogoImg = styled.img`
  width: 7rem;
  height: Auto;
`;
