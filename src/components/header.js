// Header component

import Avatar from './avatar.js';
import HeaderContent from './header-content.js';

const Header = ({avatarImg, title, subtitle}) => {

	return (
		<div className="header">
        	<Avatar src={avatarImg} />
			<HeaderContent title={title} subtitle={subtitle} />
		</div>
	)
}

export default Header