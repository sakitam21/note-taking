import React from 'react';
import PropTypes from 'prop-types';

const NoteItem = ({onDelete,text}) =>{
	return (
		<li className="note-item">
			<label className="text">{text}</label>
			<button className="delete" onClick={onDelete}>DELETE</button>
		</li>
	);
}

NoteItem.propTypes = {
	onDelete: PropTypes.func.isRequired,
	text:PropTypes.string.isRequired
}

export default NoteItem;