import PropTypes from 'prop-types';

const HeaderContent = ({title, subtitle}) => {
	return (
		<div className="header-content">
			<h1>{title}</h1>
			<p>{subtitle}</p>
		</div>
	)
}

HeaderContent.defaultProps = {
	title: 'Henlo!',
	subtitle: 'All your wanted text goes here'
}

// Set data type for the properties
HeaderContent.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string
}


export default HeaderContent