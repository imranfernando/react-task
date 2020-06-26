import React from 'react';
import ProfileImg from '../../../../assets/images/profile-img.jpg';
import { IconContext } from 'react-icons';
import { FaCaretDown } from 'react-icons/fa';

const NavbarRight = () => {
	return (
		<div className='navbar-right-holder'>
			<a className='dropdown-usermenu-toggle'>
				<span>Allie Sherman</span>
				<img
					src={ProfileImg}
					className='profile-img'
					title='Profile Image'
					alt='Profile Image'
				/>

				<IconContext.Provider value={{ className: 'dropdown-usermenu' }}>
					<div className='dropdown-usermenu-holder'>
						<FaCaretDown />
					</div>
				</IconContext.Provider>
			</a>
		</div>
	);
};

export default NavbarRight;
