import React from 'react';
import {Route} from "react-router-dom"
import {Auth, General, Profile} from 'pages';



function App() {

  return (
    <div className="wrapper">
      <Route exact path={["/profile"]} component={Profile}/>
      <Route exact path={["/login", "/register"]} component={Auth} />
      <Route exact path="/" component={General}/>

      
    </div>
  );
}

export default App;
