import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'
import Lesson from './Lesson'
import Slider from 'react-motion-slider'
import withScreenWidth from './../withScreenWidth'
import PaginationIndicator from './../PaginationIndicator'

class LessonsPage extends Component {

	static propTypes = {
		/**
		 * The course name / title
		 */
		name: React.PropTypes.string,

		/**
		 * The lessons
		 */
		lessons: React.PropTypes.arrayOf(React.PropTypes.shape({
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
		}))
	};

	static defaultProps = {
		name: 'The Keys To Cold Calling',
		lessons: [],
	};

	state = {
		selectedLessonIndex: 0,
	};

	render = () => {
		const { name, lessons, screenWidth } = this.props
		const { selectedLessonIndex } = this.state

		return <div 
			className={styles.container}
		>
			<div className={styles.title}>{name}</div>
			<div className={styles.videoPlaceholder} />
			<div className={styles.sliderWrap}>
				<Slider
			    ref="slider"
			    currentKey={`slide-${selectedLessonIndex}`} 
			    beforeSlide={(currentIndex, nextIndex) => this.setState({selectedLessonIndex: nextIndex})}
			  >
			    {lessons.map((l, i) =>
			      <Lesson 
			      	{...l} 
			      	key={`slide-${i}`} 
							style={{
			      		width: (screenWidth - 100) || 400,
			      	}} 
		      	/>
			    )}
			  </Slider>
			</div>
			<PaginationIndicator 
				index={selectedLessonIndex}
				total={lessons.length}
			/>
		</div>
	};
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#2954f4',
	},
	title: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
	},
	sliderWrap: {
		paddingLeft: 30,
		paddingRight: 30,
	},
	videoPlaceholder: {
		height: 300,
	},
})

export default withScreenWidth(look(LessonsPage))
