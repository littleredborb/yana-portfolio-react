import PropTypes from 'prop-types';

const Navigation = (props) => {
	return (
		<div>
			<ul className="navigation">
				<li><a className="btn" href={"https://twitter.com/" + props.twitter}>twitter</a></li>
				<li><a className="btn" href={"https://instagram.com/" + props.twitter}>instagram</a></li>
				<li><a className="btn" href={"#"}>commissions</a></li>
				<li><a className="btn" href={"#"}>contact</a></li>
			</ul>
		</div>
	)
}

Navigation.defaultProps = {
	twitter: "#",
	tumblr: "#",
	instagram: "#",
}

Navigation.propTypes = {
	email: PropTypes.string,
	twitter: PropTypes.string,
	tumblr: PropTypes.string,
	instagram: PropTypes.string
}

export default Navigation