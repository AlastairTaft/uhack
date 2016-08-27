import React, { Component } from 'react'
import Card from './Card'
import look, { StyleSheet } from 'react-look'
import StarsRating from './../StarsRating'
import formatNumberToPrice from './../../formatNumberToPrice.js'
import LessonOutline from './LessonOutline'
import MentorBio from './MentorBio'
import FlatButton from './../FlatButton'

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
		 * The mentor thumbnail.
		 */
		mentorThumbnail: React.PropTypes.string,

		/** 
		 * The mentor title
     */
		mentorTitle: React.PropTypes.string,

		/**
		 * The mentor description, can be html.
		 */
		mentorDescription: React.PropTypes.string,

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
		}),

		/**
		 * Fired when onBuy is clicked.
		 */
		onBuy: React.PropTypes.func,
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
			mentorThumbnail,
			mentorTitle,
			mentorDescription,
			title,
			numberOfReviews,
			rating,
			price,
			description,
			courseOutline,
			onBuy,
		} = this.props
		return <div>
			<Card>
				<div className={styles.backdrop}
					style={{
						backgroundImage: `url(${backdrop})`,
					}}
				/>
				<h3 className={styles.topMentorName}>{mentorName}</h3>
				<h1 className={styles.topTitle}>{title}</h1>
				<div className={styles.reviewLayer}>
					{numberOfReviews} Reviews - 
					<StarsRating value={rating} className={styles.stars} />
				</div>
				<div className={styles.price}>
					{price ? `$${formatNumberToPrice(price)}` : ''}
				</div>
				<FlatButton 
					className={styles.buyButton}
					onClick={onBuy}
				>
					Buy
				</FlatButton>
			</Card>
			<Card style={{textAlign: 'center', padding: 10}}>
				<h2 className={styles.subTitle}>Course Description</h2>
				<div 
					className={styles.wallOfText} 
					dangerouslySetInnerHTML={{__html: description}} 
				/>
			</Card>
			<Card style={{textAlign: 'center', padding: 10}}>
				<h2 className={styles.subTitle}>Course Outline</h2>
				<div style={{textAlign: 'left',}}>
					<LessonOutline {...courseOutline} />
				</div>
			</Card>
			<Card style={{textAlign: 'center', padding: 10}}>
				<h2 className={styles.subTitle}>Instructor</h2>
				<MentorBio 
					name={mentorName} 
					thumbnail={mentorThumbnail}
					title={mentorTitle}
					description={mentorDescription}
				/>
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
    margin: 10,
	},
	stars: {
		position: 'relative',
		bottom: -5,
		display: 'inline-block',
	},
	price: {
		margin: 10,
		paddingBottom: 20,
		fontSize: 20,
	},
	buyButton: {
		position: 'absolute',
		bottom: 10,
		right: 10,
	},
	topMentorName: {
		fontWeight: 'normal',
    fontSize: 13,
    margin: 10,
	},
	topTitle: {
		fontWeight: 'normal',
		margin: 10,
		fontSize: 23,
	},
	subTitle: {
		fontWeight: 'normal',
    fontSize: 20,
	},
	wallOfText: {
		color: '#3e3e3e',
		textAlign: 'justify',
		fontSize: 13,
	},
})

export default look(OverviewPage)