import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { GalleryContext } from '../../Contexts/GalleryContext';
import FilterGallery from '../../helpers/FilterGallery';

const GalleryOptionItem = ({
  label,
  title,
  xs,
  sm,
  content,
  gray,
  ml,
  scrollOn,
}) => {
  const {
    orderTitleCon,
    typeTitleCon,
    currentBreedTitleCon,
    limitTitleCon,
    currentBreedCon,
  } = useContext(GalleryContext);
  const [orderTitle] = orderTitleCon;
  const [typeTitle] = typeTitleCon;
  const [currentBreedTitle, setCurrentBreedTitle] = currentBreedTitleCon;
  const [limitTitle] = limitTitleCon;
  const [currentBreed, setCurrentBreed] = currentBreedCon;
  const [isOpen, setIsOpen] = useState(false);
  const { handleFilterClick } = FilterGallery();

  const openFilter = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  let firstChild;
  if (label === 'breed') {
    firstChild = <ListItem onClick={() => resetBreed()}>None</ListItem>;
  }

  const resetBreed = () => {
    setCurrentBreed({ id: '', name: '' });
    setCurrentBreedTitle('None');
  };
  return (
    <StyledDiv sm={sm} xs={xs} ml={ml}>
      <OptionBox md onClick={openFilter} gray={gray}>
        <span>{label}</span>
        <OptionHeader gray={gray}>
          {label === 'order' && <p>{orderTitle}</p>}
          {label === 'type' && <p>{typeTitle}</p>}
          {label === 'breed' && <p>{currentBreedTitle}</p>}
          {label === 'limit' && <p>{limitTitle}</p>}
          <svg viewBox="0 0 12 12">
            <path d="M6.59406 9.17405L11.7538 4.01423C12.0821 3.68603 12.0821 3.15383 11.7538 2.82575C11.4256 2.49767 10.8935 2.49767 10.5655 2.82575L5.99993 7.39142L1.43458 2.82593C1.10635 2.49779 0.574264 2.49779 0.24617 2.82593C-0.0820567 3.15401 -0.0820567 3.68615 0.24617 4.01435L5.40591 9.17418C5.57003 9.33824 5.78492 9.42017 5.9999 9.42017C6.21498 9.42017 6.43002 9.33807 6.59406 9.17405Z"></path>
          </svg>
        </OptionHeader>
        {isOpen && (
          <OptionListBox>
            <OptionList
              xs={xs}
              onMouseLeave={handleMouseLeave}
              scrollOn={scrollOn}
            >
              {firstChild}
              {content.map(item => (
                <ListItem
                  onClick={() => handleFilterClick(label, item)}
                  key={item.id}
                >
                  {item.name}
                </ListItem>
              ))}
            </OptionList>
          </OptionListBox>
        )}
      </OptionBox>
    </StyledDiv>
  );
};

export default GalleryOptionItem;

//===============Styled===============//

const StyledDiv = styled.div`
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  width: 100%;
`;

const OptionBox = styled.div`
  min-width: 100%;

  span {
    color: #8c8c8c;
    font-size: 10px;
    text-transform: uppercase;
    margin-left: 10px;
    line-height: 2;
  }
`;

const OptionHeader = styled.div`
  height: 40px;
  margin-left: 0px;

  background-color: ${props => props.theme.bgGaleryFilters};
  color: ${props => props.theme.textPrimary};

  padding: 0px 10px;
  border-radius: 10px;
  border: 2px solid rgba(255, 134, 142, 0);
  cursor: pointer;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  svg {
    fill: #8c8c8c;
    width: 12px;
    height: 12px;
  }

  &:hover {
    border: 2px solid #fbe0dc;
  }
`;

const OptionListBox = styled.div`
  position: relative;
  z-index: 99;
`;

const OptionList = styled.ul`
  margin-top: 10px;
  padding: 1px 20px;
  max-height: 20rem;
  overflow-y: ${props => props.scrollOn && 'scroll'};
  border-radius: 10px;
  font-size: 16px;
  box-sizing: border-box;
  cursor: pointer;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.02);

  position: absolute;
  min-width: 100%;
  min-width: ${props => props.xs && '200px'};
  background-color: ${props => props.theme.bgGaleryFilters};
  color: ${props => props.theme.textSecondary};

  &:first-child {
    padding-top: 0.8em;
  }

  &::-webkit-scrollbar-track {
    border: 1px solid #000;
    padding: 2px 0;
    background-color: #404040;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 1em;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  &:hover {
    color: #ff868e;
  }
`;
