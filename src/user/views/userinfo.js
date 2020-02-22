import React from 'react';
import {connect} from 'react-redux';

const Userinfo = ({user_id,user_name,user_pass,user_age,user_email,user_address,user_telephone}) => {
	return (
		<div>
			<p>user_id: {user_id}</p>
			<p>user_name: {user_name}</p>
			<p>user_pass: {user_pass}</p>
			<p>user_age: {user_age}</p>
			<p>user_email: {user_email}</p>
			<p>user_address: {user_address}</p>
			<p>user_telephone: {user_telephone}</p>
		</div>
	);
	
}

const mapStateToProps = (state) => {
	const user = state.user;
	return {
		user_id:user.user_id,
		user_name:user.user_name,
		user_pass:user.user_pass,
		user_age:user.user_age,
		user_email:user.user_email,
		user_address:user.user_address,
		user_telephone:user.user_telephone
	};
}

export default connect(mapStateToProps)(Userinfo);