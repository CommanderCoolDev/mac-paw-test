import { useContext } from 'react';
import styled from 'styled-components';
import { PupContext } from '../../Contexts/PupContext';
import Search from '../../components/Search/Search';
import BackBtn from '../../components/Vote/Back';

const SelectedView = () => {
  const { selectedKey } = useContext(PupContext);
  const [selected, setSelected] = selectedKey;
  //   console.log(selected.breeds[0].id);

  return (
    <StyledDiv>
      <Search />
      <StyledBgBox>
        <StyledSpan>
          <BackBtn btnName="Breeds" notActive />
          <StyledBtn noHover bgText selected>
            {selected.breeds[0].id}
          </StyledBtn>
        </StyledSpan>
        <StyledImg src={selected.url} aalt={selected.id} />
        <DescrBox>
          <h2>{selected.breeds[0].name}</h2>
          <p>{selected.breeds[0].bred_for}</p>

          <Description>
            <div>
              <p>
                <span>Temperament:</span>
                <br />
                {selected.breeds[0].temperament}
              </p>
            </div>
            <div>
              <p>
                <span>Height:</span> {selected.breeds[0].height.metric} sm at
                the withers
              </p>
              <p>
                <span>Weight:</span> {selected.breeds[0].weight.metric} kgs
              </p>

              <p>
                <span>Life span</span> {selected.breeds[0].life_span}
              </p>
            </div>
          </Description>
        </DescrBox>
      </StyledBgBox>
    </StyledDiv>
  );
};

export default SelectedView;

//============Styled============//

const StyledSpan = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledDiv = styled.div`
  background: ${props => props.theme.bgMain};

  width: 50%;
  height: 100%;
  padding: 20px;
`;
const StyledBtn = styled.button`
  width: auto;
  height: 40px;

  background: #ff868e;
  margin-left: 10px;

  color: white;
  font-size: 12px;
  font-size: ${props => props.bgText && '20px'};
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 10px;
  padding: 5px 30px;

  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  span {
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background: ${props => (props.noHover ? '#FF868E' : '#FBE0DC')};
    color: ${props => (props.noHover ? '#FFFFFF' : '#FF868E')};
  }

  @media (max-width: 768px) {
    padding: 5px 20px;
    width: ${props => props.selected && '100%'};
  }
`;
const StyledImg = styled.img`
  border-radius: 20px;
  width: 100%;
  max-height: 30rem;
  object-fit: cover;
`;

const DescrBox = styled.div`
  margin-top: 40px;
  width: 100%;
  height: auto;
  border: 2px solid #fbe0dc;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h2 {
    margin-top: -20px;
    background: ${props => props.theme.bgSelected};
    color: ${props => props.theme.textPrimary};
    font-size: 36px;
    padding: 0px 30px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  p {
    color: ${props => props.theme.textSecondary};
    font-size: 20px;
    margin-top: 10px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
const Description = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  div {
    flex-basis: 50%;
    margin: 0px 7px;
    line-height: 1.4;
  }

  p {
    color: ${props => props.theme.textSecondary};
    font-size: 16px;
    font-weight: 400;
  }

  span {
    color: ${props => props.theme.textPrimary};
    font-size: 16px;
    font-weight: 500;
  }
`;
const StyledBgBox = styled.div`
  background: ${props => props.theme.bgBox};
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 20px;
`;
