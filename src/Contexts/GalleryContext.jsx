import { createContext } from 'react';
import { useState } from 'react';

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [dogs, setDogs] = useState({});
  const [byLimit, setByLimit] = useState([]);
  const [order, setOrder] = useState('rand');
  const [type, setType] = useState('static');
  const [currentBreed, setCurrentBreed] = useState({});
  const [limit, setLimit] = useState(5);
  const [orderTitle, setOrderTitle] = useState('Random');
  const [typeTitle, setTypeTitle] = useState('Static');
  const [currentBreedTitle, setCurrentBreedTitle] = useState('None');
  const [limitTitle, setLimitTitle] = useState('5 items per page');
  return (
    <GalleryContext.Provider
      value={{
        orderTitleCon: [orderTitle, setOrderTitle],
        typeTitleCon: [typeTitle, setTypeTitle],
        currentBreedTitleCon: [currentBreedTitle, setCurrentBreedTitle],
        limitTitleCon: [limitTitle, setLimitTitle],

        orderCon: [order, setOrder],
        typeCon: [type, setType],
        currentBreedCon: [currentBreed, setCurrentBreed],
        limitCon: [limit, setLimit],

        dogsCon: [dogs, setDogs],
        byLimitCon: [byLimit, setByLimit],
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};
