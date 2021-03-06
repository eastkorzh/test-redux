import React from 'react'
import PropTypes from 'prop-types'

class Modal extends React.Component {
	render() {
		if(!this.props.show) {
			return null
		}

		return (
			<div className="backdrop" onClick={this.props.onClose}>
				<div className="modal">
					{this.props.children}
				</div>
			</div>
		);
	}
}

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	show: PropTypes.bool,
	children: PropTypes.node
}

export default Modal
