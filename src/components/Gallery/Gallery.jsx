import { useState, useEffect, useContex, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { PupContext } from '../../Contexts/PupContext';
import { GalleryContext } from '../../Contexts/GalleryContext';
import HelperVote from '../../helpers/HelperVote.js';
import BackBtn from '../Vote/Back';
import Search from '../Search/Search';
import GallerySort from './GallerySort';

const Gallery = () => {
  const { favKey } = useContext(PupContext);
  const [favorites, setFavorites] = favKey;
  const { dogsCon, byLimitCon, orderCon, typeCon, currentBreedCon, limitCon } =
    useContext(GalleryContext);
  const [dogs, setDogs] = dogsCon;
  const [byLimit, setByLimit] = byLimitCon;
  const [order] = orderCon;
  const [type] = typeCon;
  const [currentBreed] = currentBreedCon;
  const [limit] = limitCon;

  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState();
  const { favFromGallery } = HelperVote();
  const handleReload = () => {
    const breedID = currentBreed.id;
    setLoading(true);
    const fetchData = async () => {
      const resp = await axios(
        `https://api.thedogapi.com/v1/images/search?limit=${limit}&order=${order}&mime_types=${type}&breed_id=${
          breedID ? breedID : ''
        }`,
      );
      setDogs(resp.data);
      setLoading(false);
    };
    setTimeout(() => fetchData(), 2500);
  };
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const resp = await axios(
        'https://api.thedogapi.com/v1/images/search?limit=10',
      );
      setDogs(resp.data);
      setLoading(false);
    };
    setTimeout(() => fetchData(), 2500);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (dogs.length > 0) {
      setLoading(true);
      const temporary = [...dogs];
      const result = [];
      while (temporary.length > 0) {
        result.push(temporary.splice(0, 10));
      }
      setByLimit(result);
      setLoading(false);
    }
    // eslint-disable-next-line
  }, [dogs]);

  return (
    <StyledDiv>
      <Search />
      <StyledBgBox>
        <StyledSpan>
          <BackBtn btnName="Gallery" />
          <UploadModalBtn onClick={() => setModalOpen(false)}>
            <svg viewBox="0 0 16 16">
              <path d="M7.86601 0L12.2355 4.03339L11.4129 4.92452L8.48919 2.22567V12.3618H7.27645V2.30464L4.67336 4.90772L3.81583 4.05019L7.86601 0ZM1.21274 14.7873V7.51081H0V16H15.7656V7.51081H14.5529V14.7873H1.21274Z"></path>
            </svg>
            Upload
          </UploadModalBtn>
        </StyledSpan>
        <GallerySort handleReload={handleReload} />
      </StyledBgBox>
    </StyledDiv>
  );
};

export default Gallery;
//=========Styled============//
const StyledDiv = styled.div`
  background: ${props => props.theme.bgMain};

  width: 50%;
  height: 100%;
  padding: 20px;
`;
const StyledSpan = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const StyledBgBox = styled.div`
  background: ${props => props.theme.bgBox};
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 20px;
`;
const UploadModalBtn = styled.button`
  border-radius: 10px;
  border: none;
  height: 40px;
  background: ${props => props.theme.pinkBtn};
  color: #ff868e;
  min-width: 143px;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  &:hover {
    background: #ff868e;
    color: #ffffff;
  }

  svg {
    fill: #ff868e;
    width: 16px;
    height: 16px;
    margin-right: 0.5rem;
  }

  &:hover svg {
    fill: #ffffff;
  }
`;
