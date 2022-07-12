import styled from 'styled-components';
import HeroImg from '../../images/heroImg.png';

const Hero = () => {
  return (
    <Section>
      <StyledDiv>
        <Img src={HeroImg} alt="HeroImg" />
      </StyledDiv>
    </Section>
  );
};
export default Hero;

//===========Styled===========//

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 50%;
  background: ${props => props.theme.bgMain};
  max-height: 100vh;

  @media (max-width: 1024px) {
    display: none;
  }
`;
const StyledDiv = styled.div`
  position: relative;
  background: ${props => props.theme.bgPink};
  width: auto;
  border-radius: 20px;
  margin: 2rem;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(1.1, 1.1);
`;
