import React from 'react';
import Clock from 'react-live-clock';

const DateTimeWrapper = () => {
	return (
		<div className='date-time-box'>
			<h4>
				<Clock format={'HH:mm A '} ticking={true} timezone={'Asia/Colombo'} />
				Today
				<Clock
					format={' D MMMM, YYYY'}
					ticking={true}
					timezone={'Asia/Colombo'}
				/>
			</h4>
		</div>
	);
};

export default DateTimeWrapper;
