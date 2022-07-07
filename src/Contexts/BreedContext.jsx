import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { createContext } from 'react';

export const BreedContext = createContext();

export const BreedProvider = ({ children }) => {
  const [dogs, setDogs] = useState({});
  const [breedByLimit, setBreedByLimit] = useState([]);
  const [currentBreed, setCurrentBreed] = useState({});
  const [limit, setLimit] = useState(10);
  const [order, setOrder] = useState('rand');
  const [breeds, setBreeds] = useState({});
  const [breedsChoose, setBreedsChoose] = useState(false);
  const [limitChoose, setLimitChoose] = useState(false);
  const [breedsTitle, setBreedTitle] = useState('All Breeds');
  const [limitTitle, setLimitTitle] = useState(10);

  useEffect(() => {
    const goFetch = async () => {
      const resp = await axios('https://api.thedogapi.com/v1/breeds');
      setBreeds(resp.data);
    };
    goFetch();
  }, []);

  return (
    <BreedContext.Provider
      value={{
        dogsCon: [dogs, setDogs],
        byLimitCon: [breedByLimit, setBreedByLimit],
        currentBreedCon: [currentBreed, setCurrentBreed],
        limitCon: [limit, setLimit],
        orderCon: [order, setOrder],
        breedsCon: [breeds, setBreeds],
        breedChooseCon: [breedsChoose, setBreedsChoose],
        limitChooseCon: [limitChoose, setLimitChoose],
        breedsTitleCon: [breedsTitle, setBreedTitle],
        limitTitleCon: [limitTitle, setLimitTitle],
      }}
    >
      {children}
    </BreedContext.Provider>
  );
};
