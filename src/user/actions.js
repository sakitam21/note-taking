import {SIGNIN_STARTED, SIGNIN_SUCCESS, SIGNIN_FAILURE} from './actionTypes.js';

export const signinStarted = () => ({
	type: SIGNIN_STARTED
});

export const signinSuccess = (result) => ({
	type: SIGNIN_SUCCESS,
	result: result
});

export const signinFailure = (error) => ({
	type: SIGNIN_FAILURE,
	error: error
});

export const signin = (user_name,user_pass) => {
	return (dispatch) => {
		const apiUrl = `http://localhost:8080/users/?user_name=${user_name}&user_pass=${user_pass}`;
		dispatch(signinStarted())
		return fetch(apiUrl).then((response) => {
      		if (response.status !== 200) {
        		throw new Error('Fail to get response with status ' + response.status);
      		}
      		response.json().then((responseJson) => {
            if(responseJson.length!==0){
              dispatch(signinSuccess(responseJson[0]));
            }else{
              dispatch(signinFailure("user not found"));
            }
      		}).catch((error) => {
        		dispatch(signinFailure(error));
      		});
    	}).catch((error) => {
      		dispatch(signinFailure(error));
    	})
  	};
}