import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {searchNote} from '../actions.js';

import './searchNote.css';

class SearchNote extends Component {

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
		this.props.onSearch(this.state.value);
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
			<div className="search-note">
				<form onSubmit={this.onSubmit}>
					<input className="search-value" value={this.state.value} onChange={this.onChange}/>
					<input className="search-submit" type="submit" value="SEARCH_NOTE"/>
				</form>
			</div>
		)
	}
}

SearchNote.propTypes = {
	onSearch: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearch: (text) => {
			dispatch(searchNote(text));
		}
	}
}

export default connect(null, mapDispatchToProps)(SearchNote);