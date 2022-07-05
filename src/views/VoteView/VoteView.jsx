import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { PupContext } from '../../Contexts/PupContext';
import HelperVote from '../../helpers/HelperVote';
import BackBtn from '../../components/Vote/Back';
import Preloader from '../../components/Preloader/Preloader';
import Search from '../../components/Search/Search';

const VoteView = () => {
  const { likeKey, disKey, logKey, activeKey } = useContext(PupContext);
  const [liked] = likeKey;
  const [disliked] = disKey;
  const [active, setActive] = activeKey;
  const [log] = logKey;
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState();
  const { handleClick } = HelperVote();

  const url = dog.url;
  let activePath;
  if (active) {
    activePath =
      'M8.07107 2C3.61354 2 0 5.61354 0 10.0711C0 12.2116 0.850339 14.2646 2.36396 15.7782L14.2929 27.7071C14.6834 28.0976 15.3166 28.0976 15.7071 27.7071L27.636 15.7782C29.1497 14.2646 30 12.2116 30 10.0711C30 5.61354 26.3865 2 21.9289 2C19.7884 2 17.7354 2.85034 16.2218 4.36396L15 5.58579L13.7782 4.36396C12.2646 2.85034 10.2116 2 8.07107 2Z';
  } else {
    activePath =
      'M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817 12.364L15 23.5858L26.2218 12.364C27.3604 11.2254 28 9.68121 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963 17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254 2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782 2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30 8.07107C30 10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976 14.2929 25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z';
  }

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const resp = await axios('https://api.thedogapi.com/v1/images/search');

      setDog(resp.data[0]);
      //   setActive(false);
      setLoading(false);
    };
    fetch();
    // eslint-disable-next-line
  }, [liked, disliked]);
  return (
    <StyledDiv>
      <Search />
      <StyledBgBox>
        <BackBtn btnName="Voting" />
        {loading ? <Preloader /> : <StyledImg src={url} alt={dog.name} />}
      </StyledBgBox>
    </StyledDiv>
  );
};

export default VoteView;

//==============Styled=============//
const StyledDiv = styled.div`
  background: ${props => props.theme.bgMain};

  width: 50%;
  height: 100%;
  padding: 20px;
`;
const StyledBgBox = styled.div`
  background: ${props => props.theme.bgBox};
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 20px;
`;
const StyledImg = styled.img`
  object-position: center center;
  border-radius: 20px;
  width: 100%;
  max-height: 35rem;
  object-fit: cover;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
