import { useContext } from 'react';
import { GalleryContext } from '../Contexts/GalleryContext';

const FilterGallery = () => {
  const {
    orderTitleCon,
    typeTitleCon,
    currentBreedTitleCon,
    limitTitleCon,
    orderCon,
    typeCon,
    currentBreedCon,
    limitCon,
  } = useContext(GalleryContext);

  const [order, setOrder] = orderCon;
  const [type, setType] = typeCon;
  const [currentBreed, setCurrentBreed] = currentBreedCon;
  const [limit, setLimit] = limitCon;

  const [orderTitle, setOrderTitle] = orderTitleCon;
  const [typeTitle, setTypeTitle] = typeTitleCon;
  const [currentBreedTitle, setCurrentBreedTitle] = currentBreedTitleCon;
  const [limitTitle, setLimitTitle] = limitTitleCon;

  const handleFilterClick = (identifier, { id, name, state }) => {
    if (identifier === 'order') {
      setOrder(state);
      setOrderTitle(name);
    } else if (identifier === 'type') {
      setType(state);
      setTypeTitle(name);
    } else if (identifier === 'breed') {
      setCurrentBreed({ id: id, name: name });
      setCurrentBreedTitle(name);
    } else if (identifier === 'limit') {
      setLimit(state);
      setLimitTitle(name);
    }
  };

  return { handleFilterClick };
};

export default FilterGallery;
