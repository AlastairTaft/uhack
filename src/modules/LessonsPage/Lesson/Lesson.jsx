import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'
import formatNumberToMinutes from './../../../formatNumberToMinutes.js'
import Card from './../Card'

class Lesson extends Component { 

	static propTypes = {
		/**
		 * The lesson title.
		 */
		title: React.PropTypes.string,
		
		/**
		 * The lesson description. Can be HTML.
		 */
		description: React.PropTypes.string,

		/**
		 * Estimate number of minutes to complete the lesson, can do half sizes.
		 * e.g. 2.5 is 2 minutes 30 seconds.
		 */
		estimatedNumberOfMinutes: React.PropTypes.number,

		/** 
		 * The current step number
		 */
		step: React.PropTypes.number,

		/**
		 * The maximum step number
		 */
		maxStep: React.PropTypes.number,
	};

	static defaultProps = {
		step: 0,
		maxStep: 0,
	};

	render = () => {
		const { 
			title,
			description,
			estimatedNumberOfMinutes,
			step,
			maxStep,
			...otherProps,
		} = this.props

		return <div className={styles.container} {...otherProps}>
			<Card className={styles.card}>
				<div className={styles.title}>{title}</div>
				<div className={styles.step}>{step} of {maxStep}</div>
				<div 
					className={styles.description}
					dangerouslySetInnerHTML={{__html: description}}
				/>
				<div className={styles.estimatedTime}>
					{estimatedNumberOfMinutes ? formatNumberToMinutes(estimatedNumberOfMinutes) : ''}
				</div>
			</Card>
		</div>
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'inline-block',
	},
	card: {
		margin: 15,
	},
	title: {
		paddingTop: 70,
		fontWeight: '600',
	},
	step: {
		padding: 15,
		fontWeight: '600',
	},
	description: {
		paddingBottom: 15,
	},
	estimatedTime: {
		paddingBottom: 40,
	},
})

export default Lesson