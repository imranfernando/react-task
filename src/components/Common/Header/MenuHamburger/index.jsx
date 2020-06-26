import React from 'react';
// import './MenuHamburger.scss';
import IconHamburgerMenu from '../images/icon-hamburger-menu.png';

const MenuHamburger = (props) => {
	return (
		<div className='hamburger-icon'>
			<img
				src={IconHamburgerMenu}
				className='hamburger-img'
				title='Hamburger Menu'
				alt='Hamburger Menu'
				onClick={props.click}
			/>
		</div>
	);
};

export default MenuHamburger;
