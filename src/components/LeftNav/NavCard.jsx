import { useEffect, useState } from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavCard = ({
  imgSrc,
  btnName,
  url,
  yellow,
  green,
  alt,

  path,
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (url === path) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [url, path]);

  return (
    <BoxDiv
      imgSrc={imgSrc}
      btnName={btnName}
      url={url}
      yellow={yellow}
      green={green}
      alt={alt}
      active={active}
    >
      <Link to={url}>
        <StyledDiv green={green} yellow={yellow} active={active}>
          <img src={imgSrc} alt={alt} />
        </StyledDiv>
        <StyledBtn active={active}>{btnName}</StyledBtn>
      </Link>
    </BoxDiv>
  );
};

export default NavCard;

//============Styled==========//

const StyledDiv = styled.div`
  background-color: #b4b7ff;
  background-color: ${props => props.green && '#97EAB9'};
  background-color: ${props => props.yellow && '#FFD280'};

  padding: 1.3rem 1rem;
  width: 138px;
  height: 198px;
  margin-bottom: 1rem;
  border-radius: 20px;
  border: 5px solid rgba(255, 255, 255, 0.6);
  border: ${props => props.active && '5px solid #FBE0DC'};
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    display: flex;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
const StyledBtn = styled.div`
  width: 100%;
  height: 38px;
  background: ${props => props.theme.bgBox};
  background: ${props => props.active && '#FF868E'};
  color: #ff868e;
  color: ${props => props.active && 'white'};
  font-size: 14px;
  letter-spacing: 2px;
  padding: 10px 0px;
  text-transform: uppercase;
  text-align: center;
  border-radius: 10px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1.4rem;
    height: 42px;
  }
`;
const BoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover ${StyledBtn} {
    background: #fbe0dc;
    background: ${props => props.active && '#FF868E'};
  }

  &:hover ${StyledDiv} {
    border: 5px solid #ffffff;
    border: ${props => props.active && '5px solid #FBE0DC'};
  }
`;
