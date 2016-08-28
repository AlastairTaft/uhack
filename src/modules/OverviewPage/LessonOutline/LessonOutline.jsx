import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'

class LessonOutline extends Component {
	
	static propTypes = {
		lesson1: React.PropTypes.string,
		lesson2: React.PropTypes.string,
		lesson3: React.PropTypes.string,
		lesson4: React.PropTypes.string,
		lesson5: React.PropTypes.string,
		lesson6: React.PropTypes.string,
		lesson7: React.PropTypes.string,
	};

	render = () => {
		
		const { lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7 } = this.props

		return <div>
			{lesson1 ? <div className={styles.lessonWrap}>
				<span className={styles.lessonAccent}>Lesson 1: </span> {lesson1}
			</div> : null}
			{lesson2 ? <div className={styles.lessonWrap}>
				<span className={styles.lessonAccent}>Lesson 2: </span> {lesson2}
			</div> : null}
			{lesson3 ? <div className={styles.lessonWrap}>
				<span className={styles.lessonAccent}>Lesson 3: </span> {lesson3}
			</div> : null}
			{lesson4 ? <div className={styles.lessonWrap}>
				<span className={styles.lessonAccent}>Lesson 4: </span> {lesson4}
			</div> : null}
			{lesson5 ? <div className={styles.lessonWrap}>
				<span className={styles.lessonAccent}>Lesson 5: </span> {lesson5}
			</div> : null}
			{lesson6 ? <div className={styles.lessonWrap}>
				<span className={styles.lessonAccent}>Lesson 6: </span> {lesson6}
			</div> : null}
			{lesson7 ? <div className={styles.lessonWrap}>
				<span className={styles.lessonAccent}>Lesson 7: </span> {lesson7}
			</div> : null}
		</div>
	}
}

const styles = StyleSheet.create({
	lessonWrap: {
		margin: '10px 0',
		fontSize: 15,
	},
	lessonAccent: {
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
})

export default LessonOutline