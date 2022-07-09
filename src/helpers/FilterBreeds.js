import { useContext } from 'react';
import { BreedContext } from '../Contexts/BreedContext';

const FilterBreeds = () => {
  const {
    currentBreedCon,
    limitCon,
    orderCon,

    breedChooseCon,
    limitChooseCon,

    breedsTitleCon,
    limitTitleCon,
  } = useContext(BreedContext);

  const [limit, setLimit] = limitCon;
  const [currentBreed, setCurrentBreed] = currentBreedCon;
  const [order, setOrder] = orderCon;

  const [breedsChoose, setBreedsChoose] = breedChooseCon;
  const [limitChoose, setLimitChoose] = limitChooseCon;

  const [breedTitle, setBreedTitle] = breedsTitleCon;
  const [limitTitle, setLimitTitle] = limitTitleCon;

  const handleFilterClick = (limitLabel, item) => {
    if (limitLabel === 'Limit: 10') {
      setLimit(item.num);
      setLimitChoose(false);
      setLimitTitle(item.num);
    } else if (limitLabel === 'All Breeds') {
      setCurrentBreed({ id: item.id, name: item.name });
      setBreedsChoose(false);
      setBreedTitle(item.name);
    } else {
      alert('ERROR!');
    }
  };
  const changeOrder = value => {
    if (value === 'ASC') {
      order === 'asc' ? setOrder('rand') : setOrder('asc');
    } else if (value === 'DESC') {
      order === 'desc' ? setOrder('rand') : setOrder('desc');
    }
  };
  return { handleFilterClick, changeOrder };
};
export default FilterBreeds;
