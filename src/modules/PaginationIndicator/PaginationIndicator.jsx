import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'

const c = StyleSheet.combineStyles

class PaginationIndicator extends Component {
	
	static propTypes = {
		/**
		 * The number of pages to display dots for.
		 */
		total: React.PropTypes.number,
		
		/**
		 * The index of the selected page.
		 */
		index: React.PropTypes.number,
	};

	static defaultProps = {
		total: 5,
		index: 2,
	};

	render = () => {
		var { total, index, className } = this.props

		var dots = []
		for (var i = 0; i < total; i++){
			var localClass = (index == i) ? styles.selectedDot : styles.dot
			if (className){
				className = c(localClass, className)
			} else {
				className = localClass
			}
			dots.push(<div className={localClass} />)
		}

		return <div className={styles.container}>
			{dots}
		</div>
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
	},
	dot: {
		borderRadius: '50%',
		width: 8,
		height: 8, 
		backgroundColor: '#676783',
		display: 'inline-block',
		margin: '0 3px',
	},
	selectedDot: {
		borderRadius: '50%',
		width: 8,
		height: 8,
		backgroundColor: '#fefeff', 
		display: 'inline-block',
		margin: '0 3px',
	},
})

/*.circle {
	border-radius: 50%;
	width: 200px;
	height: 200px; 
	/* width and height can be anything, as long as they're equal */

export default PaginationIndicator