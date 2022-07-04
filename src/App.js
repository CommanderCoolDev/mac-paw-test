import { Route, Routes } from 'react-router-dom';

import styled from 'styled-components';
import LeftNav from './components/LeftNav/LeftNav';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LeftNav />} />
    </Routes>
  );
}

export default App;
