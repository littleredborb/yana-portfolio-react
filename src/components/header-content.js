import PropTypes from 'prop-types';

const HeaderContent = (props) => {
	// const infoLink = "#gallery";

	return (
		<div className="header-content">
			<h1>{props.title}</h1>
			<p>{props.subtitle}</p>
		</div>
	)
}

HeaderContent.defaultProps = {
	title: 'Welcome!',
	subtitle: 'This is a necessary attempt to make a long sentence just to fill up this space for testing purposes.'
}

// SSet data type for the properties
HeaderContent.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired
}


export default HeaderContent