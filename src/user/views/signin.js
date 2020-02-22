import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {signin} from '../actions.js';

import './signin.css';

class Signin extends Component {

	constructor(props){
		super(props);
		this.state = {
			user_name:'',
			user_pass:''
		}

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onSubmit(event) {
		event.preventDefault();
		this.props.signin(this.state.user_name,this.state.user_pass);
		//console.log("onSubmit status: "+this.props.status);
	}

	onChange(event){
		this.setState({
			[event.target.name]: event.target.value
		});
	}


	render(){
		switch(this.props.status) {
			case 'success':{
				this.props.history.push('/main');
				return <div>success</div>;
			}
			default:{
				return (
				<div className="signin">
					<div className="form">
					{this.props.status}
					<form method="get" onSubmit={this.onSubmit}>
						<div className="inputItem">
							<label>user_name</label>
							<input type="text" name="user_name" value={this.state.user_name} onChange={this.onChange} />
						</div>
						<div className="inputItem">
							<label>user_pass</label>
							<input type="text" name="user_pass" value={this.state.user_pass} onChange={this.onChange} />
						</div>
						<div>
							<input type="submit" value="submit" className="submit"/>
						</div>
					</form>
					</div>
				</div>
				);
			}
		}
	}
}

const mapStateToProps = (state) => {
	return {
		status:state.user.status
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		signin: (user_name,user_pass) => {
      		dispatch(signin(user_name,user_pass));
    	}
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Signin));
