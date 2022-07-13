import { useState, useContext } from 'react';
import { PupContext } from '../../Contexts/PupContext';
import styled from 'styled-components';

const GreetView = () => {
  const { greetKey } = useContext(PupContext);
  const [greet, setGreet] = greetKey;
  const [start, setStart] = useState(true);
  //   console.group(greet);

  const handleClick = () => {
    setGreet(false);
  };

  return (
    <StyledDiv>
      <StyledP>O_O</StyledP>
      <StyledBtn onClick={handleClick}>IGNITE!!!</StyledBtn>
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
