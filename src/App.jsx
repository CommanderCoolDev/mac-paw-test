import { Suspense, useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import styled from 'styled-components';
import LeftNav from './components/LeftNav/LeftNav';
import { lightTheme } from './themes/ligthTheme';
import Hero from './views/HeroView/HeroView';
import Search from './components/Search/Search';
import Preloader from './components/Preloader/Preloader';
import VoteView from './views/VoteView/VoteView';

function App() {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <Suspense fallback={<Preloader />}>
      <ThemeProvider theme={theme}>
        <DocumentBody>
          <LeftNav theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/voting" element={<VoteView />} />
          </Routes>
        </DocumentBody>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;

const DocumentBody = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
