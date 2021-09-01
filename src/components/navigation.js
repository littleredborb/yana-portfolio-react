import PropTypes from 'prop-types';

const Navigation = (props) => {
	return (
		<div>
			<ul className="navigation">
				<li><a className="btn" href={"https://twitter.com/" + props.twitter}>twitter</a></li>
				<li><a className="btn" href={"https://instagram.com/" + props.twitter}>instagram</a></li>
				<li><a className="btn" href={"https://instagram.com/" + props.twitter}>linkA</a></li>
				<li><a className="btn" href={"https://instagram.com/" + props.twitter}>linkB</a></li>
			</ul>
		</div>
	)
}

Navigation.defaultProps = {
	email: "ynn40407@gmail.com",
	twitter: "yanana404",
	tumblr: "yanana-404",
	instagram: "yanana404",
}

Navigation.propTypes = {
	email: PropTypes.string.isRequired,
	twitter: PropTypes.string.isRequired,
	tumblr: PropTypes.string.isRequired,
	instagram: PropTypes.string.isRequired
}

export default Navigation