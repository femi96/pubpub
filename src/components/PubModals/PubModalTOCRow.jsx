import React, { PropTypes } from 'react';
import Radium from 'radium';
import {baseStyles} from './pubModalStyle';
// import {globalStyles} from '../../utils/styleConstants';

let styles = {};

const PubModalTOCRow = React.createClass({
	propTypes: {
		content: PropTypes.object,
		tocIndex: PropTypes.string,
	},

	render: function() {
		console.log(this.props.content);
		console.log(this.props.tocIndex);
		return (
			<div style={styles.container}>

				<div style={[styles.rowIndent[this.props.content.level], styles.row]} key={'TOC-' + this.props.tocIndex}>
					<span style={styles.rowNumber}>{this.props.tocIndex}</span>
					<span style={styles.rowTitle}>{this.props.content.title}</span>
					
				</div>
				

			</div>
		);
	}
});

export default Radium(PubModalTOCRow);

styles = {
	container: {
		margin: '10px 0px',
	},
	row: {
		color: '#888',
		':hover': {
			color: '#000',
			cursor: 'pointer',
		}
	},
	rowNumber: {
		// float: 'left',
		fontWeight: 'bold',
		fontFamily: 'Arial',
		color: '#BBB',
		// width: 50,
		height: 25,
		lineHeight: '25px',
		// backgroundColor: 'red',
		fontSize: '18px',
		paddingRight: 20,
	},
	rowTitle: {
		// float: 'left',
		height: 25,
		lineHeight: '25px',
		// width: 'calc(100% - 50px)',
		// backgroundColor: 'green',
		fontSize: '18px',

	},
	rowIndent: {
		1: {
			paddingLeft: 0,
		},
		2: {
			paddingLeft: 20,
		},
		3: {
			paddingLeft: 40,
		},
		4: {
			paddingLeft: 50,
		},
		5: {
			paddingLeft: 60,
		},
		6: {
			paddingLeft: 70,
		},
	},
};
