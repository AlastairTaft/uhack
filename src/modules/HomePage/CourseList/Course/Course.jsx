import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'

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
		steps: React.PropTypes.number,

		/**
		 * Rating, this is a number from 0 to 1. 1 being best, 0 being worst
		 * it will get represented as a out of 5 stars display.
		 */
		rating: React.PropTypes.number,
	};

	static defaultProps = {
		name: 'How to win friends and influence people',
		// Random picture I google'd online that's a thumbnail of a penguin
		thumbnail: 'http://www.imagemagick.org/Usage/thumbnails/cut_to_fit.gif',
	};

	render = () => {
		const { name, thumbnail } = this.props

		return <div className={styles.container}>
			<img src={thumbnail} className={styles.thumbnail} />
			<div className={styles.content}>
				{name}
			</div>
		</div>
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'block',
		position: 'relative',
		minHeight: 110,
	},
	thumbnail: {
		position: 'absolute',
		top: 0,
		left: 0,
	},
	content: {
		paddingLeft: 120,
	},
})

export default look(Course)
