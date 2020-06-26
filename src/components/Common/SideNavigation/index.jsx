import React from 'react';
import * as PageName from '../../../constants/pageNames';
import ProfileImg from '../../../assets/images/profile-img.jpg';
import { IconContext } from 'react-icons';
import {
	FaEnvelope,
	FaHome,
	FaAppStoreIos,
	FaUserAlt,
	FaAddressBook,
	FaMobileAlt,
	FaBuffer,
} from 'react-icons/fa';

const SideNavigation = () => {
	return (
		<div className='side-navbar-holder'>
			<div className='side-navbar-top'></div>
			<div className='side-navbar-inner'>
				<div className='side-navbar-profile'>
					<img
						src={ProfileImg}
						className='navbar-profile-img'
						title='Profile Image'
						alt='Profile Image'
					/>
					<h5>Allie Sherman</h5>
					<h6>UI / UX Designer</h6>
				</div>
				<div className='side-navbar-menu'>
					<ul>
						<li>
							<a href='#'>
								<IconContext.Provider
									value={{ className: 'side-navbar-menu-icon' }}
								>
									<FaHome />
								</IconContext.Provider>
								{PageName.pageHomeTitle}
							</a>
						</li>
						<li>
							<a href='#'>
								<IconContext.Provider
									value={{ className: 'side-navbar-menu-icon' }}
								>
									<FaAppStoreIos />
								</IconContext.Provider>
								{PageName.pageAppsTitle}
							</a>
						</li>
						<li>
							<a href='#'>
								<IconContext.Provider
									value={{ className: 'side-navbar-menu-icon' }}
								>
									<FaUserAlt />
								</IconContext.Provider>
								{PageName.pageProfileTitle}
							</a>
						</li>
						<li>
							<a href='#'>
								<IconContext.Provider
									value={{ className: 'side-navbar-menu-icon' }}
								>
									<FaAddressBook />
								</IconContext.Provider>
								{PageName.pageReportsTitle}
							</a>
						</li>
						<li className='active'>
							<a href='#'>
								<IconContext.Provider
									value={{ className: 'side-navbar-menu-icon' }}
								>
									<FaMobileAlt />
								</IconContext.Provider>
								{PageName.pageInsideTheAppTitle}
							</a>
						</li>
						<li>
							<a href='#'>
								<IconContext.Provider
									value={{ className: 'side-navbar-menu-icon' }}
								>
									<FaBuffer />
								</IconContext.Provider>
								{PageName.pageNaturalLanguageQueryTitle}
							</a>
						</li>
					</ul>
				</div>
				<div className='side-navbar-message'>
					<IconContext.Provider
						value={{ className: 'side-navbar-message-icon' }}
					>
						<div className='side-navbar-message-icon-holder'>
							<FaEnvelope />
							<div className='circle circle--green'>
								<span>2</span>
							</div>
						</div>
					</IconContext.Provider>
				</div>
			</div>
		</div>
	);
};

export default SideNavigation;
