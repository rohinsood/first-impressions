/* 
  Creates the app element
*/

import Page from './components/page';
import Navbar from './components/navbar';
import './index.css'
import React from 'react';
import * as opening from './components/board/openings'

function App() {

  // creates a global state to change the opening on a button click
  const [opSelection, setOpSelection] = React.useState(opening.bongcloud)
  const [move, setMove] = React.useState(0)

  return (
    <div className="App">

      {/* displays the Navbar component, passing in the state function to change */}
      <Navbar setOp={setOpSelection} setMove={setMove} />

      <main>
        {/* displays the page component, passing in the current state*/}
        <Page op={opSelection} resetMove={move}></Page>
      </main>
    </div>
  );
}

export default App;
