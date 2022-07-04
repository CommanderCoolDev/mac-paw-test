import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';
import voteImg from '../../images/voteImg.svg';
import breedImg from '../../images/breedImg.svg';
import galleryImg from '../../images/galleryImg.svg';

const LeftNav = ({ theme, setTheme }) => {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);
  return (
    <Section path={path}>
      <BoxDiv>
        <FlexDiv>
          <Logo theme={theme} />
          <ThemeSwitcher theme={theme} setTheme={setTheme} />
        </FlexDiv>
      </BoxDiv>
    </Section>
  );
};

export default LeftNav;

//==========Styled=========//
const BoxDiv = styled.div`
  position: fixed;
  width: 455px;
  margin: 2rem 8rem;
  background: ${props => props.theme.bgMain};
  @media(max-width: 1024px) {
    position: static;
    margin 1.8rem 7rem;
    
  }
  @media(max-width: 767px) {
    position: static;
    margin 25px;
    width:auto;
  }
    h1 {
        color: ${props => props.theme.textPrim};
    margin-top: 5rem;
  }

  p {
      color: ${props => props.theme.textSec};
    padding: 1.5rem 0rem;
  }

  h3 {
      color: ${props => props.theme.textPrim};
    margin-top: 3.5rem;
  }
`;
const Section = styled.section`
  background: ${props => props.theme.bgMain};
  min-height: 100vh;
  max-height: auto;
  width: 50%;
  display: ${props => (props.path === '/' ? 'block' : 'none')};
  @media (max-width: 1024px) {
    width: auto;
    height: 100vh;
    display: ${props => (props.path === '/' ? 'block' : 'none')};
  }
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
