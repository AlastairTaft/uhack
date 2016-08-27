import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'

class SuggestedCourse extends Component {

	static propTypes = {
		/**
		 * The course title / name
		 */
		name: React.PropTypes.string,

		/**
		 * This is the background image to display.
		 */
		backgroundImage: React.PropTypes.string,

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
	};

	static defaultProps = {
		name: "How To Win Friends and Influence People",
		backgroundImage: require('./mountain.jpg'),
		numberOfReviews: 47,
		numberOfSteps: 7,
		minutesPerStep: 5,
	};

	render = () => {

		const { 
			name, 
			backgroundImage, 
			numberOfReviews,
			numberOfSteps,
			minutesPerStep,
		} = this.props

		return <div 
			className={styles.container}
			style={{
				backgroundImage: `url(${backgroundImage})`,
			}}
		>
			<h1 className={styles.courseTitle}>{name}</h1>

			<div className={styles.reviewLayer}>
				{numberOfReviews} Reviews
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
		top: 212,
		margin: 0,
		fontSize: 20,
		textAlign: 'left',
	},
	reviewLayer: {
		position: 'absolute',
		top: 260,
		left: 12,
		fontSize: 16,
	},
	stepsLayer: {
		position: 'absolute',
		top: 280,
		left: 12,
		fontSize: 16,
	},
})

export default look(SuggestedCourse)