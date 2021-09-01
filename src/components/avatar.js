import defaultImg from '../img/default.png'

const Avatar = ({src}) => {

	return (
		<div className="avatar-cropped">
			<img className="avatar" src={src}></img>
		</div>
		
	)
}

Avatar.defaultProps = {
	src: defaultImg
}

export default Avatar