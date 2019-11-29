import React from 'react';
import ScoreCardlist from './Component/ScoreCardList';
import './App.css';
import {
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import * as PXBThemes from '@pxblue/themes/react';
require('typeface-open-sans');
require("typeface-open-sans");

function App() {
  return (
    <MuiThemeProvider theme={createMuiTheme(PXBThemes.blue)}>
      <div className="App">
        <header className="App-header">
          <ScoreCardlist />
        </header>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
