import React from 'react';
import * as PageName from '../../../constants/pageNames';
import { Link } from 'react-router-dom';
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
							<Link to='/#'>
								<IconContext.Provider
									value={{ className: 'side-navbar-menu-icon' }}
								>
									<FaHome />
								</IconContext.Provider>
								{PageName.pageHomeTitle}
							</Link>
						</li>
						<li>
							<Link to='/#'>
								<IconContext.Provider
									value={{ className: 'side-navbar-menu-icon' }}
								>
									<FaAppStoreIos />
								</IconContext.Provider>
								{PageName.pageAppsTitle}
							</Link>
						</li>
						<li>
							<Link to='/#'>
								<IconContext.Provider
									value={{ className: 'side-navbar-menu-icon' }}
								>
									<FaUserAlt />
								</IconContext.Provider>
								{PageName.pageProfileTitle}
							</Link>
						</li>
						<li>
							<Link to='/#'>
								<IconContext.Provider
									value={{ className: 'side-navbar-menu-icon' }}
								>
									<FaAddressBook />
								</IconContext.Provider>
								{PageName.pageReportsTitle}
							</Link>
						</li>
						<li className='active'>
							<Link to='/#'>
								<IconContext.Provider
									value={{ className: 'side-navbar-menu-icon' }}
								>
									<FaMobileAlt />
								</IconContext.Provider>
								{PageName.pageInsideTheAppTitle}
							</Link>
						</li>
						<li>
							<Link to='/#'>
								<IconContext.Provider
									value={{ className: 'side-navbar-menu-icon' }}
								>
									<FaBuffer />
								</IconContext.Provider>
								{PageName.pageNaturalLanguageQueryTitle}
							</Link>
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
