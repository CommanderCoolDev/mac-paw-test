import { Link } from 'react-router-dom';
import logoLight from '../../images/logoLight.svg';
import logoDark from '../../images/logoDark.svg';
import styled from 'styled-components';
import { lightTheme } from '../../themes/ligthTheme';

const Logo = ({ theme }) => {
  return (
    <Link to="/">
      {theme === lightTheme ? (
        <LogoImg src={logoLight} alt="logo" />
      ) : (
        <LogoImg src={logoDark} alt="logo" />
      )}
    </Link>
  );
};

export default Logo;

//=========Styled===========//
const LogoImg = styled.img`
  width: 7rem;
  height: Auto;
`;
