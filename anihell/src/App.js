import React from 'react';
import {Route} from "react-router-dom"
import {Auth, General, Profile} from 'pages';
import {createStore} from 'redux';
import rootReducer from './store/reducers';
import {Provider} from 'react-redux';

const store  = createStore(rootReducer);

function App() {

  return (
    <Provider store={store}>
      <div className="wrapper">
        <Route exact path={["/profile"]} component={Profile}/>
        <Route exact path={["/login", "/register"]} component={Auth} />
        <Route exact path="/" component={General}/>
      </div>
    </Provider>
  );
}

export default App;
