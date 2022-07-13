import { Suspense, useState, useContext } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import { BreedProvider } from './Contexts/BreedContext';
import { PupContext, PupProvider } from './Contexts/PupContext';
import { ThemeProvider } from 'styled-components';
import { GalleryProvider } from './Contexts/GalleryContext';

import styled from 'styled-components';
import LeftNav from './components/LeftNav/LeftNav';
import { lightTheme } from './themes/ligthTheme';
import Hero from './views/HeroView/HeroView';
import Search from './components/Search/Search';
import Preloader from './components/Preloader/Preloader';
import VoteView from './views/VoteView/VoteView';
import BreedView from './views/BreedView/BreedView';
import SelectedView from './views/SelectedView/SelectedView';
import Gallery from './components/Gallery/Gallery';
import DislikesView from './views/DFLViews/DislikesView';
import GreetView from './views/GreetView/GreetView';

function App() {
  const { greetKey } = useContext(PupContext);
  const [greet, setGreet] = greetKey;
  const [theme, setTheme] = useState(lightTheme);
  // console.log(greet);
  return (
    <>
      {greet ? (
        <GreetView />
      ) : (
        <Suspense fallback={<Preloader />}>
          <ThemeProvider theme={theme}>
            <DocumentBody>
              <LeftNav theme={theme} setTheme={setTheme} />
              <Routes>
                <Route path="/" element={<Hero />} />

                <Route path="/voting" element={<VoteView />} />
                <Route
                  path="/breeds"
                  element={
                    <BreedProvider>
                      <BreedView />
                    </BreedProvider>
                  }
                />
                <Route path="/breeds/selected" element={<SelectedView />} />
                <Route
                  path="/gallery"
                  element={
                    <GalleryProvider>
                      <Gallery />
                    </GalleryProvider>
                  }
                />
                <Route path="/disliked" element={<DislikesView />} />
                {/* <Route path="/greet" element={<GreetView />} /> */}
              </Routes>
            </DocumentBody>
          </ThemeProvider>
        </Suspense>
      )}
    </>
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
