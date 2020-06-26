import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
	const pageTitle = props.pageTitle;

	return (
		<div className='breadcrumb'>
			<ul>
				<li>
					<h4>{pageTitle}</h4>
				</li>
				<li>
					<Link to='/#'>
						<h4>Dashboard</h4>
					</Link>
				</li>
				<li>
					<h4>{pageTitle}</h4>
				</li>
			</ul>
		</div>
	);
};

export default Breadcrumb;
