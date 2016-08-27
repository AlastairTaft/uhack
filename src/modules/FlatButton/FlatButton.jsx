import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'

const c = StyleSheet.combineStyles

class FlatButton extends Component {
	render = () => {

		var { className } = this.props
		if (className){
			className = c(styles.container, className)
		} else {
			className = styles.container
		}

		return <div {...this.props} className={className}>
			{this.props.children}
		</div>
	};
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#2953f5',
		textTransform: 'uppercase',
		display: 'inline-block',
		color: 'white',
		textAlign: 'center',
		minWidth: 76,
    padding: '8px 10px',
    display: 'inline-block',
    fontSize: 18,
	}
})

export default FlatButton