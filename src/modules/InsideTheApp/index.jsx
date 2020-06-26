import React, { Fragment, useState, useEffect } from 'react';
import * as PageTitle from '../../constants/pageTitles';
import * as PageName from '../../constants/pageNames';
import Header from '../../components/Common/Header';
import SideNavigation from '../../components/Common/SideNavigation';
import Breadcrumb from '../../components/Common/Breadcrumb';
import Footer from '../../components/Common/Footer';
import Banner from './Banner/index';
import FormChangePassword from './FormChangePassword/index';

const InsideTheApp = () => {
	// set the page title
	document.title = PageTitle.pageInsideTheAppTitle;

	const [sidebarOpen, setSidebarOpen] = useState(false);
	let classes = sidebarOpen
		? 'container-full sidebar-open'
		: 'container-full sidebar-close';

	// sidebar click
	const menuClick = () => {
		if (sidebarOpen === false) {
			// sidebar open
			setSidebarOpen(true);
		} else if (sidebarOpen === true) {
			// sidebar close
			setSidebarOpen(false);
		}
	};

	useEffect(() => {
		menuClick();
	}, [menuClick]);

	return (
		<Fragment>
			<Header clickHandle={menuClick} />

			<div className={classes}>
				<div className='side-navbar'>
					<SideNavigation />
				</div>
				<div className='content-wrapper'>
					<div className='content'>
						<Breadcrumb pageTitle={PageName.pageInsideTheAppTitle} />
						<div className='content-inner'>
							<Banner />
							<FormChangePassword />
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</Fragment>
	);
};

export default InsideTheApp;
