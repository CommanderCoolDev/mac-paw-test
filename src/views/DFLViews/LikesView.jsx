import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { PupContext } from '../../Contexts/PupContext';
import Select from '../../helpers/Select';
import Preloader from '../../components/Preloader/Preloader';
import BackBtn from '../../components/Vote/Back';
import { Link } from 'react-router-dom';
import Search from '../../components/Search/Search';

const LikesView = () => {
  const { likeKey } = useContext(PupContext);
  const [liked, addToLiked] = likeKey;
  const [byLimit, setByLimit] = useState([]);
  const { handleSelectedClick } = Select();
  const [loading, setLoading] = useState();

  let noResult;
  if (liked.length < 1) {
    noResult = (
      <NoResult>
        <p>No item found</p>
      </NoResult>
    ); //in case there is no liked
  }

  useEffect(() => {
    if (liked.length > 0) {
      setLoading(true);
      const likeArr = [...liked];
      const result = [];
      while (likeArr.length > 0) {
        result.push(likeArr.splice(0, 10));
      }
      setLoading(false);
      setByLimit(result);
    }
  }, [liked]);
  return (
    <StyledDiv>
      <Search />
      <StyledBgBox>
        <BackBtn btnName="Liked" />
        {noResult}

        {loading ? (
          <Preloader />
        ) : (
          <>
            {byLimit.map((tenDogs, index) => (
              <GridTemp key={index}>
                {tenDogs
                  .sort((a, b) =>
                    a.width / a.height > b.width / b.height ? 1 : -1,
                  )
                  .map((dog, index) => (
                    <GridItemWithName key={dog.id} index={index}>
                      <Img src={dog.url} />
                      {dog.breeds.length > 0 ? (
                        <StyledLabel>
                          <StyledLink
                            to="/breeds/selected"
                            onClick={() => handleSelectedClick(dog)}
                          >
                            {dog.breeds[0].name}
                          </StyledLink>
                        </StyledLabel>
                      ) : (
                        <StyledLabel>No name provided</StyledLabel>
                      )}
                    </GridItemWithName>
                  ))}
              </GridTemp>
            ))}
          </>
        )}
      </StyledBgBox>
    </StyledDiv>
  );
};

export default LikesView;

//=========Styled===========//

const NoResult = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.bgSort};
  width: 100%;
  height: 60px;
  border-radius: 10px;
  padding: 0px 20px;
  margin: 10px 0px;

  p {
    color: ${props => props.theme.textSecondary};
    padding: 0px 10px;
  }
`;
const StyledBgBox = styled.div`
  background: ${props => props.theme.bgBox};
  border-radius: 20px;
  width: 100%;
  height: 100vh;
  padding: 20px;
`;
const StyledDiv = styled.div`
  background: ${props => props.theme.bgMain};

  width: 50%;
  min-height: 100vh;
  padding: 20px;
`;

export const GridTemp = styled.div`
  padding: 0px 10px;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    padding: 0px;
  }

  display: grid;
  grid-template-columns: repeat(3, 32%);
  grid-template-rows: repeat(3, auto);
  column-gap: 20px;
  row-gap: 20px;

  grid-template-areas:
    'one two three'
    'one four four'
    'five four four'
    'six seven eight'
    'nine nine eight'
    'nine nine ten';
  justify-content: space-evenly;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, auto);
    grid-template-areas:
      'one'
      'two'
      'three'
      'four'
      'five'
      'six'
      'seven'
      'eight'
      'nine'
      'ten';
  }
`;

export const Img = styled.img`
  object-position: center center;
  width: 100%;
  height: 100%;
  min-height: 120px;
  max-height: 300px;
  border-radius: 20px;
  object-fit: cover;

  position: relative;
  z-index: 1;

  opacity: 1;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
`;

export const StyledLabel = styled.div`
  display: none;

  svg {
    width: 20px;
    height: 20px;
    fill: #ff868e;
  }
`;

export const GridItemWithName = styled.div`
  width: 100%;
  max-height: 100%;
  max-height: ${props => props.index === 0 && '300px'};
  max-height: ${props => props.index === 3 && '300px'};
  max-height: ${props => props.index === 7 && '300px'};
  max-height: ${props => props.index === 8 && '300px'};

  color: white;
  border-radius: 20px;
  position: relative;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: 1;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 134, 142, 0.6);
  }

  &:hover ${StyledLabel} {
    display: block;
    position: absolute;
    bottom: 10px;
    text-align: center;

    z-index: 100;
    padding: 10px 5px;
    margin-left: 10px;
    margin-right: 10px;

    font-size: 20px;
    text-align: center;
    border-radius: 10px;
    width: 93%;

    justify-self: center;
    background-color: ${props => props.theme.bgBreed};
    color: #ff868e;
  }

  &:hover ${Img} {
    opacity: 0.3;
  }

  grid-area: ${props => props.index === 0 && 'one'};
  grid-area: ${props => props.index === 4 && 'two'};
  grid-area: ${props => props.index === 3 && 'three'};
  grid-area: ${props => props.index === 1 && 'four'};
  grid-area: ${props => props.index === 2 && 'five'};

  grid-area: ${props => props.index === 6 && 'six'};
  grid-area: ${props => props.index === 7 && 'seven'};
  grid-area: ${props => props.index === 5 && 'eight'};
  grid-area: ${props => props.index === 8 && 'nine'};
  grid-area: ${props => props.index === 9 && 'ten'};
`;

export const GridItemWithLike = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-height: ${props => props.index === 0 && '300px'};
  max-height: ${props => props.index === 3 && '300px'};
  max-height: ${props => props.index === 7 && '300px'};
  max-height: ${props => props.index === 8 && '300px'};

  color: white;
  border-radius: 20px;
  position: relative;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: 1;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 134, 142, 0.6);
  }

  &:hover ${StyledLabel} {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    z-index: 100;
    padding: 10px 5px;
    border-radius: 10px;

    background-color: ${props => props.theme.bgBreed};
    color: #ff868e;
  }

  &:hover ${Img} {
    opacity: 0.3;
  }

  grid-area: ${props => props.index === 0 && 'one'};
  grid-area: ${props => props.index === 2 && 'two'};
  grid-area: ${props => props.index === 3 && 'three'};
  grid-area: ${props => props.index === 1 && 'four'};
  grid-area: ${props => props.index === 4 && 'five'};

  grid-area: ${props => props.index === 6 && 'six'};
  grid-area: ${props => props.index === 7 && 'seven'};
  grid-area: ${props => props.index === 5 && 'eight'};
  grid-area: ${props => props.index === 8 && 'nine'};
  grid-area: ${props => props.index === 9 && 'ten'};
`;
const StyledLink = styled(Link)`
  color: #ff868e;
`;
