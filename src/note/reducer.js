import {ADD_NOTE, SEARCH_NOTE, UPDATE_NOTE, DELETE_NOTE} from './actionTypes.js';
import {VIEW_STARTED, VIEW_SUCCESS, VIEW_FAILURE} from './actionTypes.js';

export default (state = [], action) => {
	switch(action.type) {
		case VIEW_SUCCESS: {
			state =[];
			return state.concat(action.result);
		}
		case ADD_NOTE: {
			return [
				{
					id:action.id,
					text:action.text,
					imgurl:action.imgurl,
					userid:action.userid
				},
				...state
			]
		}
		case DELETE_NOTE: {
			return state.filter((noteItem)=>{
				return noteItem.id !==action.id
			})
		}
		case SEARCH_NOTE: {
			return [...state];
		}
		default: {
			return state;
		}
	}
}