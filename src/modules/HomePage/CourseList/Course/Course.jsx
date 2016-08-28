import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'
import StarsRating from './../../../StarsRating'

class Course extends Component {

	static propTypes = {
		/**
		 * The course title.
		 */
		name: React.PropTypes.string,
		
		/**
		 * The thumbnail image, will be placed inside an img src attribute.
		 */
		thumbnail: React.PropTypes.string,
		
		/**
		 * The number of steps it takes to complete this course. Max is 7.
		 */
		numberOfSteps: React.PropTypes.number,

		/**
		 * Rating, this is a number from 0 to 1. 1 being best, 0 being worst
		 * it will get represented as a out of 5 stars display.
		 */
		rating: React.PropTypes.number,

		/**
		 * Fired when course is selected.
		 */
		onSelect: React.PropTypes.func,
	};

	static defaultProps = {
		name: 'How to win friends and influence people',
		thumbnail: 'http://this-image-does-not-exist',
		numberOfSteps: 7,
		rating: 0.5,
	};

	render = () => {
		const { 
			name, 
			thumbnail,
			numberOfSteps, 
			rating,
			onSelect,
		} = this.props

		return <div className={styles.container} onClick={onSelect}>
			<img src={thumbnail} className={styles.thumbnail} />
			<div className={styles.content}>
				{name}
			</div>
			<div className={styles.footer}>
				{numberOfSteps} Steps - <StarsRating value={rating} className={styles.rating} />
				<div className={styles.price}>
					Free
				</div>
			</div>
		</div>
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'block',
		position: 'relative',
		minHeight: 64 + 16,
		borderBottom: '1px solid #eeeeee',
	},
	thumbnail: {
		position: 'absolute',
		top: 0,
		left: 16,
		height: 64,
		width: 84,
	},
	content: {
		paddingLeft: 100,
		margin: '14px 16px',
	},
	footer: {
		position: 'absolute',
		top: 40,
		left: 120,
		right: 16,
		color: '#a1a1a1',
		fontSize: 11,
	},
	rating: {
		//padding: 2,
		display: 'inline-block',
		position: 'relative',
		bottom: -5,
	},
	price: {
		textTransform: 'uppercase',
		float: 'right',
		position: 'relative',
		bottom: -7,
	},
})

export default look(Course)
