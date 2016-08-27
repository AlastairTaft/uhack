import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'
import StarsRating from './../../../StarsRating'

class SuggestedCourse extends Component {

	static propTypes = {
		/**
		 * The course title / name
		 */
		name: React.PropTypes.string,

		/**
		 * This is the background image to display.
		 */
		backdrop: React.PropTypes.string,

		/**
		 * Number of reviews
		 */
		numberOfReviews: React.PropTypes.number,

		/**
		 * Number of steps in the course
		 */
		numberOfSteps: React.PropTypes.number,

		/**
		 * Number of minutes to complete each step.
		 */
		minutesPerStep: React.PropTypes.number,

		/**
		 * Rating, value 0 to 1
		 */
		rating: React.PropTypes.number,
	};

	static defaultProps = {
		name: "How To Win Friends and Influence People",
		backdrop: '', //require('./mountain.jpg'),
		numberOfReviews: 47,
		numberOfSteps: 7,
		minutesPerStep: 5,
		rating: 0.5,
	};

	render = () => {

		const { 
			name, 
			backdrop, 
			numberOfReviews,
			numberOfSteps,
			minutesPerStep,
			rating,
		} = this.props

		return <div 
			className={styles.container}
			style={{
				backgroundImage: `url(${backdrop})`,
				backgroundColor: 'rgba(20, 19, 75, 0.5)',
				backgroundBlendMode: 'multiply',
			}}
		>
			<h1 className={styles.courseTitle}>{name}</h1>

			<div className={styles.reviewLayer}>
				{numberOfReviews} Reviews - 
				<StarsRating value={rating} className={styles.stars} />
			</div>

			<div className={styles.stepsLayer}>
				{numberOfSteps} Steps - {minutesPerStep} minutes per Step
			</div>
		</div>
	}
}

const styles = StyleSheet.create({
	container: {
		height: 315,
		textAlign: 'center',
		position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
	},
	courseTitle: {
		position: 'absolute',
		left: 12,
		right: 12,
		top: 192,
		margin: 0,
		fontSize: 20,
		textAlign: 'left',
    fontFamily: 'Lato',
	},
	reviewLayer: {
		position: 'absolute',
		top: 240,
		left: 12,
		fontSize: 16,
		fontSize: 12,
    fontWeight: '200',
	},
	stars: {
		position: 'relative',
		bottom: -5,
		display: 'inline-block',
	},
	stepsLayer: {
		position: 'absolute',
		top: 270,
		left: 12,
		fontSize: 16,
		fontSize: 12,
    fontWeight: '400',
	},
})

export default look(SuggestedCourse)