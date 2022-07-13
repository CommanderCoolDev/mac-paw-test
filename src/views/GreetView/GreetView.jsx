import { useState, useContext } from 'react';
import { PupContext } from '../../Contexts/PupContext';
import styled from 'styled-components';
import Preloader from '../../components/Preloader/Preloader';
import { BounceLoader } from 'react-spinners';

const GreetView = () => {
  const { greetKey } = useContext(PupContext);
  const [greet, setGreet] = greetKey;
  const [next, setNext] = useState(true);
  //   console.group(greet);

  const handleClickNext = () => {
    setNext(false);
  };
  const handleClickGreet = () => {
    setGreet(false);
  };

  return (
    <StyledDiv>
      {next ? (
        <>
          <StyledP>O_O</StyledP>
          <StyledBtn onClick={handleClickNext}>IGNITE!!!</StyledBtn>
        </>
      ) : (
        <>
          <StyledP>
            One more second)It was interesting task!!! My face looks mostly like
            this o_O al the way i do it))) Also here is Preloader, just dont
            want you to miss it and used setTimeout mostly everywhere. Adaptive
            design is in progress(i hope it will be done just in time) Also i
            would like to share my little helper which was with me every day,
            just click on it))) It takes almost 29 hours in summary to do this
            funny staff))) Thank you for such interesting experience.
          </StyledP>
          <BounceLoader color="#97EAB9" />
          <StyledBtn onClick={handleClickGreet}>LETS GO!!!!</StyledBtn>
          <a
            href="https://hostrider.com/index.html#0"
            target="_blank"
            rel="noreferrer"
          >
            <StyledBtn>HELPER=)</StyledBtn>
          </a>
        </>
      )}
    </StyledDiv>
  );
};

export default GreetView;
//===========Styled===========//
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
const StyledP = styled.p`
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 45px;
`;
const StyledBtn = styled.button`
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
  background: #92cd41;
  text-decoration: none;
  color: white;
  box-shadow: inset -4px -8px 0 0 #4aa52e;
  cursor: pointer;
  font-size: 30px;
  padding: 20px;
  margin: 15px 0;

  &:hover,
  &:focus {
    background: #76c442;
    box-shadow: inset 6px 6px 0px 0px #4aa52e;
  }
  &:active {
    box-shadow: inset 4px 4px 0px 0px #4aa52e;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 95%;
    box-sizing: content-box;
  }
  &:before {
    top: -6px;
    left: 0;
    border-top: 6px black solid;
    border-bottom: 6px black solid;
  }
  &:after {
    left: -6px;
    top: 0;
    border-left: 6px black solid;
    border-right: 6px black solid;
  }
`;
const StyledPreloader = styled(Preloader)`
  margin: 0;
`;
