import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {view as User} from './user/';
import {view as Note} from './note/';
import Userinfo from './user/views/userinfo.js';

function A(){
	return <h1>A Page!</h1>;
}



function App() {
  return (
  	<Router>
  		<Route path="/" exact component={User}/>
  		<Route path="/main" component={Note} />
  		<Route path="/a" component={A} />
  		<Route path="/userinfo" component={Userinfo} />
  	</Router>
  );
}

export default App;
