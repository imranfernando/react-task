import React from 'react';
// import './Breadcrumb.scss';

const Breadcrumb = (props) => {
	const pageTitle = props.pageTitle;

	return (
		<div className='breadcrumb'>
			<ul>
				<li>
					<h4>{pageTitle}</h4>
				</li>
				<li>
					<a href='#'>
						<h4>Dashboard</h4>
					</a>
				</li>
				<li>
					<h4>{pageTitle}</h4>
				</li>
			</ul>
		</div>
	);
};

export default Breadcrumb;
