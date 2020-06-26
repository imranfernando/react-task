import React from 'react';
import NavbarRight from './NavbarRight';
import Notifications from './Notifications';
import DateTimeWrapper from './DateTimeWrapper';
import SearchBox from './SearchBox';
import MenuHamburger from './MenuHamburger';

const Header = (props) => {
	return (
		<header className='header'>
			<div className='menu-hamburger'>
				<MenuHamburger click={props.clickHandle} />
			</div>
			<div className='search-box'>
				<SearchBox />
			</div>
			<div className='date-time-wrapper'>
				<DateTimeWrapper />
			</div>
			<div className='navbar-right'>
				<Notifications />
				<NavbarRight />
			</div>
		</header>
	);
};

export default Header;
