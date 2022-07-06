import styled from 'styled-components';

const VoteButtons = ({ like, fav, dis, path, onClick, viewBox }) => {
  return (
    <StyledBtn like={like} dis={dis} fav={fav} onClick={onClick}>
      <StyledSvg like viewBox={viewBox}>
        <path d={path}></path>
      </StyledSvg>
    </StyledBtn>
  );
};

export default VoteButtons;

//============Styled===============//
const StyledSvg = styled.svg`
  width: 30px;
  height: 30px;
  fill: white;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  @media (max-width: 767px) {
    width: 25px;
    height: 25px;
  }
`;
const StyledBtn = styled.button`
  width: 80px;
  height: 80px;

  @media (max-width: 767px) {
    width: 60px;
    height: 60px;
  }

  border: none;
  margin: ${props => props.fav && '0px 4px'};

  background: ${props => props.like && '#97EAB9'};
  background: ${props => props.fav && '#FF868E'};
  background: ${props => props.dis && '#FFD280'};

  border-top-left-radius: ${props => props.like && '20px'};
  border-bottom-left-radius: ${props => props.like && '20px'};
  border-top-right-radius: ${props => props.dis && '20px'};
  border-bottom-right-radius: ${props => props.dis && '20px'};
  border-radius: ${props => props.disl && '#97EAB9'};
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.like && 'rgba(151, 234, 185, 0.3)'};
    background: ${props => props.fav && 'rgba(255, 134, 142, 0.3)'};
    background: ${props => props.dis && 'rgba(255, 210, 128, 0.3)'};
  }

  &:hover ${StyledSvg} {
    fill: ${props => props.like && '#97EAB9'};
    fill: ${props => props.fav && '#FF868E'};
    fill: ${props => props.disl && '#FFD280'};
  }
`;
