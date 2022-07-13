import { useState, useEffect, useContext } from 'react';

import { PupContext } from '../../Contexts/PupContext';
import HelperVote from '../../helpers/HelperVote';
import styled from 'styled-components';
import BackBtn from '../../components/Vote/Back';
import Search from '../../components/Search/Search';
import Log from '../../components/Vote/Log';
import Preloader from '../../components/Preloader/Preloader';

const FavoritesView = () => {
  const { favKey } = useContext(PupContext);

  const [favorites, addToFav] = favKey;
  const [byLimit, setByLimit] = useState([]);
  const [favLog, setFavLog] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getTime } = HelperVote();

  const removeFromFavorites = (id, index) => {
    let newFav = [...favorites];
    newFav.splice(index, 1);
    addToFav(newFav);
    setFavLog(prevLog => [
      ...prevLog,
      {
        id: id,
        content: 'was removed from Favorites',
        type: '',
        time: getTime(),
      },
    ]);
  };

  let noResult;
  if (favorites.length < 1) {
    noResult = (
      <NoResult>
        <p>No item found</p>
      </NoResult>
    ); //in case there is no fav
  }
  useEffect(() => {
    if (favorites.length >= 0) {
      setLoading(true);
      const favArr = [...favorites];
      const result = [];
      while (favArr.length > 0) {
        result.push(favArr.splice(0, 10));
      }
      setLoading(false);
      setByLimit(result);
    }
  }, [favorites]);

  return (
    <StyledDiv>
      <Search />
      <StyledBgBox>
        <BackBtn btnName="Favorites" />
        {noResult}
        {loading ? (
          <Preloader />
        ) : (
          <>
            {byLimit.map((tenDogs, index) => (
              <GridTemp key={index}>
                {tenDogs.map((dog, index) => (
                  <GridItemWithLike key={dog.id} index={index}>
                    <Img src={dog.url} />
                    <StyledLabel
                      onClick={() => removeFromFavorites(dog.id, index)}
                    >
                      <svg viewBox="0 0 30 30">
                        <path d="M8.07107 2C3.61354 2 0 5.61354 0 10.0711C0 12.2116 0.850339 14.2646 2.36396 15.7782L14.2929 27.7071C14.6834 28.0976 15.3166 28.0976 15.7071 27.7071L27.636 15.7782C29.1497 14.2646 30 12.2116 30 10.0711C30 5.61354 26.3865 2 21.9289 2C19.7884 2 17.7354 2.85034 16.2218 4.36396L15 5.58579L13.7782 4.36396C12.2646 2.85034 10.2116 2 8.07107 2Z"></path>
                      </svg>
                    </StyledLabel>
                  </GridItemWithLike>
                ))}
              </GridTemp>
            ))}
            <Loggger>
              {favLog.map((item, index) => (
                <Log
                  key={index}
                  id={item.id}
                  content={item.content}
                  type={item.type}
                  time={item.time}
                />
              ))}
            </Loggger>
          </>
        )}
      </StyledBgBox>
    </StyledDiv>
  );
};
export default FavoritesView;
//============Styled===========//
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
const Loggger = styled.div`
  margin: 10px 0px;
  width: 100%;
`;
