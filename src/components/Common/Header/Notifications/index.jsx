import React from 'react';
import { IconContext } from 'react-icons';
import { FaRegEnvelope, FaRegBell } from 'react-icons/fa';

const Notifications = () => {
	return (
		<div className='notifications-holder'>
			<ul className='notifications-ui'>
				<li>
					<IconContext.Provider value={{ className: 'notifications-icon' }}>
						<div className='notifications-icon-holder'>
							<FaRegEnvelope />
							<div className='circle circle--blue'>
								<span></span>
							</div>
						</div>
					</IconContext.Provider>
				</li>
				<li>
					<IconContext.Provider value={{ className: 'notifications-icon' }}>
						<div className='notifications-icon-holder'>
							<FaRegBell />
							<div className='circle circle--red'>
								<span></span>
							</div>
						</div>
					</IconContext.Provider>
				</li>
			</ul>
		</div>
	);
};

export default Notifications;
