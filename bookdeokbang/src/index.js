import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components';
import Router from './router'
import theme from './styles/commonTheme' ;
import { StyledEngineProvider } from '@mui/styled-engine';
import  GlobalStyles  from './styles/GlobalStyles';

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <GlobalStyles>
        <Router/>
      </GlobalStyles>
    </ThemeProvider>
  </StyledEngineProvider>
);