import {ADD_NOTE, SEARCH_NOTE, UPDATE_NOTE, DELETE_NOTE} from './actionTypes.js';
import {ADD_STARTED, ADD_SUCCESS, ADD_FAILURE} from './actionTypes.js';
import {VIEW_STARTED, VIEW_SUCCESS, VIEW_FAILURE} from './actionTypes.js';

export const addStarted = () =>({
  type: ADD_STARTED
});

export const addSuccess = (result) => ({
  type: ADD_SUCCESS,
  result: result
});

export const addFailure = (error) => ({
  type: ADD_FAILURE,
  error: error
});

export const viewStarted = () =>({
  type: VIEW_STARTED
});

export const viewSuccess = (result) => ({
  type: VIEW_SUCCESS,
  result: result
});

export const viewFailure = (error) => ({
  type: VIEW_FAILURE,
  error: error
});

export const onAdd = (id,text,imgurl,userid) => {
	return (dispatch) => {
		const apiUrl = `http://localhost:8080/notes/add/?note_id=${id}&note_text=${text}&note_imgurl=${imgurl}&user_id=${userid}`;
		dispatch(addStarted())
		return fetch(apiUrl).then((response) => {
      		if (response.status !== 200) {
        		throw new Error('Fail to get response with status ' + response.status);
      		}
      		response.json().then((responseJson) => {
            if(responseJson.length!==0){
              dispatch(addSuccess(responseJson[0]));

              const viewApiUrl = `http://localhost:8080/notes/view`;
			  dispatch(viewStarted())
			  fetch(viewApiUrl).then((response) => {
      		    if (response.status !== 200) {
        		  throw new Error('Fail to get response with status ' + response.status);
      		    }
      		    response.json().then((responseJson) => {
                  if(responseJson.length!==0){
            	    console.log(responseJson);
                    dispatch(viewSuccess(responseJson));
                  }else{
                    dispatch(viewFailure("note not found"));
                  }
      		    }).catch((error) => {
        		  dispatch(viewFailure(error));
      		    });
    		  }).catch((error) => {
      		    dispatch(viewFailure(error));
    	      })

            }else{
              dispatch(addFailure("user not found"));
            }
      		}).catch((error) => {
        		dispatch(addFailure(error));
      		});
    	}).catch((error) => {
      		dispatch(addFailure(error));
    	})
  	};
}

export const onView = () => {
	return (dispatch) => {
		const viewApiUrl = `http://localhost:8080/notes/view`;
		dispatch(viewStarted())
		return fetch(viewApiUrl).then((response) => {
      		if (response.status !== 200) {
        		throw new Error('Fail to get response with status ' + response.status);
      		}
      		response.json().then((responseJson) => {
            if(responseJson.length!==0){
            	console.log(responseJson);
              dispatch(viewSuccess(responseJson));
            }else{
              dispatch(viewFailure("note not found"));
            }
      		}).catch((error) => {
        		dispatch(viewFailure(error));
      		});
    	}).catch((error) => {
      		dispatch(viewFailure(error));
    	})
  	};
}

let nextNoteId = 0;

export const addNote = (text,imgurl,userid)=>({
	type: ADD_NOTE,
	id: nextNoteId++,
	text: text,
	imgurl: imgurl,
	userid: userid
});

export const searchNote = (text) => ({
	type: SEARCH_NOTE,
	text: text
});

export const updateNote = (id,text,imgurl) => ({
	type: UPDATE_NOTE,
	id: id,
	text: text,
	imgurl: imgurl
});

export const deleteNote = (id) => ({
	type :DELETE_NOTE,
	id: id
});