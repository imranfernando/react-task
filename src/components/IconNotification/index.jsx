import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { FaRegEnvelope, FaRegBell } from 'react-icons/fa';
// import './IconNotification.scss';

const IconNotification = (props) => {
	const IconName = React.createElement(props.IconName);
	console.log(props.IconName);

	return (
		<IconContext.Provider value={{ className: 'notifications-icon' }}>
			<div className='notifications-icon-holder'>
				{/* <FaRegEnvelope /> */}
				<IconName />
				<div className='circle'>
					<span></span>
				</div>
			</div>
		</IconContext.Provider>
	);
};

export default IconNotification;
