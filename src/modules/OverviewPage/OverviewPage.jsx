import React, { Component } from 'react'
import Card from './Card'
import look, { StyleSheet } from 'react-look'

class OverviewPage extends Component {
	
	static propTypes = {
		
		backdrop: React.PropTypes.string,


	};

	render = () => {

		const { backdrop } = this.props
		return <div>
			<Card>
				<div className={styles.backdrop}
					style={{
						backgroundImage: `url(${backdrop})`,
					}}
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
})

export default look(OverviewPage)