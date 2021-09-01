// Header component

import Avatar from './avatar.js';
import avatarImg from '../img/avatar.png';
// import PropTypes from 'prop-types';
import HeaderContent from './header-content.js';

const Header = () => {
	const infoLink = "#gallery";

	return (
		<div className="header">
        	<Avatar src={avatarImg}></Avatar>
			<HeaderContent></HeaderContent>
			{/* <button className="btn">Info</button> */}
		</div>
	)
}
// can separate into a const
// const headingStyle = {
// 	color:'red'
// }

export default Header