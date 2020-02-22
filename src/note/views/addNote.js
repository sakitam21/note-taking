import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {onAdd} from '../actions.js';
import './addNote.css';

class AddNote extends Component {

	constructor(props, context) {
		super(props, context);
		this.state={
			value:''
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onSubmit(event) {
		event.preventDefault();
		this.props.onAdd(this.state.value);
		//this.props.onView();
		this.setState({
			value: ''		
		});
	}

	onChange(event){
		this.setState({
			value: event.target.value
		});
	}

	render(){
		return (
			<div className="add-note">
				<form onSubmit={this.onSubmit}>
					<textarea className="new-note" value={this.state.value} onChange={this.onChange}/>
					<input className="add-btn" type="submit" value="ADD_NOTE"/>
				</form>
			</div>
		)
	}
}

AddNote.propTypes = {
	onAdd: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAdd: (text) => {
			dispatch(onAdd(2,text,'imgurl','1'));
		}
	}
}

export default connect(null, mapDispatchToProps)(AddNote);