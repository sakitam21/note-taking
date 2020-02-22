import {SIGNIN_STARTED, SIGNIN_SUCCESS, SIGNIN_FAILURE} from './actionTypes.js';

export default (state={status:"loading"},action) => {
	switch(action.type) {
		case SIGNIN_STARTED: {
			return {status:"loading"};
		}
		case SIGNIN_SUCCESS: {
			return {...state,status:"success",...action.result};
		}
		case SIGNIN_FAILURE: {
			return {status:"failure"};
		}
		default: {
			return state;
		}
	}
}