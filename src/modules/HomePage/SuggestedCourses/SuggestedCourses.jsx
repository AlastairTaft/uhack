import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'
import SuggestedCourse from './SuggestedCourse'
import PaginationIndicator from './../../PaginationIndicator'
import Slider from 'react-motion-slider'

class SuggestedCourses extends Component {

	static propTypes = {
		courses: React.PropTypes.array,
	};

	static defaultProps = {
		courses: [],
	};

	state = {
		selectedCourseIndex: 0,
	};

	render = () => {
		const { selectedCourseIndex } = this.state
		const { courses } = this.props
		//var selectedCourse = courses[selectedCourseIndex]

		return <div className={styles.container}>
			<div className={styles.title}>ValYou</div>
			<Slider
		    ref="slider"
		    currentKey={`slide-${selectedCourseIndex}`} 
		    beforeSlide={(currentIndex, nextIndex) => this.setState({selectedCourseIndex: nextIndex})}
		  >
		    {courses.map((c, i) =>
		      <SuggestedCourse 
		      	{...c} 
		      	key={`slide-${i}`} 
		      	className="slide" 
	      	/>
		    )}	
		  </Slider>
			<PaginationIndicator total={courses.length} index={selectedCourseIndex} />
		</div>
	}
}

const styles = StyleSheet.create({
	container: {
		height: 315,
		textAlign: 'center',
		position: 'relative',
    color: 'white',
    overflow: 'hidden',
	},
	title: {
		fontSize: 22,
		position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: 1,
    fontFamily: 'LatoBold',
	},
})

export default look(SuggestedCourses)