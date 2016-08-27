import React, { Component } from 'react'
import Card from './Card'
import look, { StyleSheet } from 'react-look'
import StarsRating from './../StarsRating'
import formatNumberToPrice from './../../formatNumberToPrice.js'
import LessonOutline from './LessonOutline'

class OverviewPage extends Component {
	
	static propTypes = {
		
		/**
		 * The backdrop image.
		 */
		backdrop: React.PropTypes.string,

		/**
		 * The mentor name.
		 */
		mentorName: React.PropTypes.string,

		/**
		 * The course title
		 */
		title: React.PropTypes.string,

		/**
		 * The number of reviews.
		 */
		numberOfReviews: React.PropTypes.number,

		/**
		 * The course rating 0 to 1
		 */
		rating: React.PropTypes.number,

		/**
		 * Price in cent
		 */
		price: React.PropTypes.number,

		/**
		 * The course description. This can be html
		 */
		description: React.PropTypes.string,

		/**
		 * A course outline object, outlines the lessons.
		 */
		courseOutline: React.PropTypes.shape({
			lesson1: React.PropTypes.string,
			lesson2: React.PropTypes.string,
			lesson3: React.PropTypes.string,
			lesson4: React.PropTypes.string,
			lesson5: React.PropTypes.string,
			lesson6: React.PropTypes.string,
			lesson7: React.PropTypes.string,
		})
	};

	static defaultProps = {
		mentorName: '',
		title: 'The Keys To Cold Calling',
		numberOfReviews: 47,
		rating: 0.5,
		price: 1000,
		courseOutline: {
			lesson1: '',
			lesson2: '',
			lesson3: '',
			lesson4: '',
			lesson5: '',
			lesson6: '',
			lesson7: '',
		},
	}

	render = () => {

		const { 
			backdrop,
			mentorName,
			title,
			numberOfReviews,
			rating,
			price,
			description,
			courseOutline,
		} = this.props
		return <div>
			<Card>
				<div className={styles.backdrop}
					style={{
						backgroundImage: `url(${backdrop})`,
					}}
				/>
				<h3>{mentorName}</h3>
				<h1>{title}</h1>
				<div className={styles.reviewLayer}>
					{numberOfReviews} Reviews - 
					<StarsRating value={rating} className={styles.stars} />
				</div>
				<div className={styles.price}>
					{price ? `$${formatNumberToPrice(price)}` : ''}
				</div>
			</Card>
			<Card>
				<h2>Course Description</h2>
				<div dangerouslySetInnerHTML={{__html: description}} />
			</Card>
			<Card>
				<h2>Course Outline</h2>
				<LessonOutline {...courseOutline} />
			</Card>
			<Card>
				<h2>Instructor</h2>
				
			</Card>
		</div>
	}
}

const styles = StyleSheet.create({
	backdrop: {
		height: 315,
		textAlign: 'center',
		position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(20, 19, 75, 0.5)',
	},
	reviewLayer: {
		fontSize: 16,
		fontSize: 12,
    fontWeight: '200',
	},
	stars: {
		position: 'relative',
		bottom: -5,
		display: 'inline-block',
	},
	price: {

	},
})

export default look(OverviewPage)