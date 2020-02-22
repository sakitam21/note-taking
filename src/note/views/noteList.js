import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import NoteItem from './noteItem.js';
import {deleteNote} from '../actions.js';

const NoteList = ({note, onDelete}) => {
	return (
		<ul className="note-list">
			{
				note.map((item)=> (
					<NoteItem 
						key={item.note_id} 
						text={item.note_text} 
						onDelete={() => onDelete(item.note_id)}
					/>
				))
			}
		</ul>
	);
};

NoteList.propsTypes = {
	note: PropTypes.array.isRequired
};


const mapStateToProps= (state) => {
	return {
		note: state.note
	};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => {
      dispatch(deleteNote(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);