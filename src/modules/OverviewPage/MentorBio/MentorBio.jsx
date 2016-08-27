import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'

class MentorBio extends Component {
	
	static propTypes = {
		/**
		 * A thumbnail image of the mentor.
		 */
		thumbnail: React.PropTypes.string,
	
		/**
		 * The mentor's name
		 */
		name: React.PropTypes.string,

		/**
		 * The title of the mentor, e.g. Sales Assistant.
		 */
		title: React.PropTypes.string,

		/**
		 * A bio description. Can be html.
		 */ 
		description: React.PropTypes.string,
	};

	static defaultProps = {
		thumbnail: `${__API_URL__}/static/unknown_person.png`,
	};

	render = () => {
		const { thumbnail, name, title, description } = this.props
		return <div>
			<div className={styles.shortInfo}>
				<div 
					className={styles.thumbnail} 
					style={{
						backgroundImage: `url(${thumbnail})`,
					}}
				/>
				<div className={styles.name}>{name}</div>
				<div className={styles.title}>{title}</div>
			</div>
			<div 
				className={styles.description} 
				dangerouslySetInnerHTML={{__html: description}} 
			/>
		</div>
	}
}

const styles = StyleSheet.create({
	shortInfo: {
		position: 'relative',
		minHeight: 72 + (16 * 2),
	},
	thumbnail: {
		position: 'absolute',
		left: 16,
		top: 16,
		width: 72,
		height: 72,
		backgroundSize: 'cover',
	},
	name: {
		position: 'absolute',
		left: 72 + (16 * 2),
		top: 25,
	},
	title: {
		position: 'absolute',
		left: 72 + (16 * 2),
		top: 50,
	},
})

export default look(MentorBio)