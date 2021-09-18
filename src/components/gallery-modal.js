import PropTypes from 'prop-types'
import React from 'react'
import { useState } from 'react'

import defaultImg from '../img/default.png'


export const GalleryModal = ({src, onCloseModal, isVisible}) => {
	return (
		<div className={isVisible ? "modal-overlay-open" : "modal-overlay-closed" } onClick={() => onCloseModal()} >
			<div className="modal">
				<img src={src}></img>
			</div>
		</div>
	)
}


GalleryModal.defaultProps = {
	src: defaultImg,
	isVisible: false,
	onCloseModal: () => { console.log('modal onCloseModal not implemented')}
}

GalleryModal.propTypes = {
	src: PropTypes.string,
	isVisible: PropTypes.bool,
	onClick: PropTypes.func
}

export default GalleryModal;