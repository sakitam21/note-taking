import React from 'react';
import {Route} from 'react-router-dom';

import Signin from './signin.js';

export default () => {
	return (
		<div className="user">
			<Route path="/" exact component={Signin} />
		</div>
	);
}