import React from 'react';
import InsideTheAppBanner from '../../../assets/images/inside-the-app-banner.png';

const Banner = () => {
	return (
		<div className='banner-wrapper'>
			<img
				src={InsideTheAppBanner}
				className='inside-the-app-banner-img'
				title='Inside The App Banner'
				alt='Inside The App Banner'
			/>
			<h1>Inside The App</h1>
			<p>
				Enter the new password then your password will change! Don't forgot
				again
			</p>
		</div>
	);
};

export default Banner;
