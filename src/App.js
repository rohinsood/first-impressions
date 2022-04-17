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

  return (
    <div className="flex flex-col bg-gradient-to-bl from-slate-800 to-black h-screen w-full font-sans text-gray-200">

      {/* displays the Navbar component, passing in the state function to change */}
      <Navbar setOp={setOpSelection} />

      <main>
        {/* displays the page component, passing in the current state*/}
        <Page op={opSelection}></Page>
      </main>
    </div>
  );
}

export default App;
