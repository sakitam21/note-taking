import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import NoteList from './noteList.js';
import SearchNote from './searchNote.js';
import AddNote from './addNote.js';

import {onView} from '../actions.js';

import './notes.css';

class Notes extends Component{

  componentWillMount(){
  	this.props.onView();
  }

  render(){
	return (
		<div className="notes">
		  <header>
			<div className="header">
			  <Link to="/userinfo">
				<div className="avator"></div>
			  </Link>
			  <SearchNote />
			</div>
		  </header>

		  <nav>
		  	<div  className="nav">
		  	<div className="nav-ul">
		  	  <ul>
		  	  	<Link to="/main/"><li>note1</li></Link>
		  	  	<Link to="/main/SearchNote"><li>note2</li></Link>
		  		<Link to="/main/addNote"><li>note3</li></Link>
		  	  </ul>
		  	</div>
		  	<AddNote />
		  	</div>
		  </nav>

		  <main>
		  	<div className="main">
		  	  <NoteList />
		  	</div>
		  </main>
		</div>
	);
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		onView: () => {
			dispatch(onView());
		}
	}
}

export default connect(null, mapDispatchToProps)(Notes); 