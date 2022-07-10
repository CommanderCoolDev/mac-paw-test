import { useState, useContext } from 'react';

import { PupContext } from '../Contexts/PupContext';

const Select = () => {
  const { selectedKey } = useContext(PupContext);
  const [selected, setSelected] = selectedKey;

  const handleSelectedClick = dog => {
    setSelected(dog);
    // console.log('work'); //just in case
    // console.log(selected); //just in case
  };

  return { handleSelectedClick };
};

export default Select;
