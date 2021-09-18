import PropTypes from 'prop-types'
import defaultImg from '../img/default.png'

export const Image = ({src, pos, onOpenModal}) => {
	return (
			<img className="image" alt="artwork" onClick={() => onOpenModal(src)} src={src} style={{objectPosition: pos}}></img>
	)
}

Image.propTypes = {
	src: PropTypes.string,
	pos: PropTypes.string,
	onOpenModal: PropTypes.func
}

Image.defaultProps = {
	src: defaultImg,
	pos: "50% 50%",
	onOpenModal: () => { console.log('image onOpenModal not implemented')}
}


export default Image;