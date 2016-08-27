/**
 * Shows a stars rating out of 5 stars.
 */

import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'

class StarsRating extends Component {
	
	static propTypes = {
		/**
		 * A number between 0 to 1
		 */
		value: React.PropTypes.number,
	};

	static propTypes = {
		value: 0.5,
	};

	render = () => {
		const { value, ...otherProps } = this.props
		var halfStars = value / 0.1
		var wholeStars = Math.floor(halfStars / 2)
		halfStars = halfStars % 2

		var stars = []
		for (var i = 0; i < wholeStars; i++){
			stars.push(<svg fill="#e4cb33" height="18" viewBox="0 0 18 18" width="18">
		    <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
		    <path d="M0 0h18v18H0z" fill="none"/>
			</svg>)
		}

		// Add any potential half stars
		if (halfStars == 1){
			stars.push(<svg fill="#e4cb33" height="18" viewBox="0 0 24 24" width="18">
		    <defs>
	        <path d="M0 0h24v24H0V0z" id="a"/>
		    </defs>
		    <clipPath id="b">
	        <use overflow="visible" />
		    </clipPath>
		    <path clip-path="url(#b)" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
			</svg>)
		}

		// Add remaining empty stars
		while (stars.length < 5){
			stars.push(<svg fill="#e4cb33" height="18" viewBox="0 0 24 24" width="18">
		    <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
		    <path d="M0 0h24v24H0z" fill="none"/>
			</svg>)
		}


		return <div className={styles.container} {...otherProps}>
			{stars}
		</div>
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'inline-block',
	},
})

export default look(StarsRating)
