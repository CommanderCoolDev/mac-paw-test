import { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import styled from 'styled-components';
import LeftNav from './components/LeftNav/LeftNav';
import { lightTheme } from './themes/ligthTheme';

function App() {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeProvider theme={theme}>
      <DocumentBody>
        <Routes>
          <Route
            path="/"
            element={<LeftNav theme={theme} setTheme={setTheme} />}
          />
        </Routes>
      </DocumentBody>
    </ThemeProvider>
  );
}

export default App;

const DocumentBody = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
