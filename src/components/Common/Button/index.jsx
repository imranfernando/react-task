import React from 'react';

const Button = (props) => {
	const type = props.type;
	const name = props.name;
	const disabled = props.disabled;

	return (
		<button className='btn btn--primary' type={type} disabled={disabled}>
			{name}
		</button>
	);
};

export default Button;
