import React from 'react';
import {Route} from "react-router-dom"

import {General} from 'pages';


function App() {
  return (
    <div className="wrapper">
      <Route exact path="/" component={General}/>
    </div>
  );
}

export default App;
