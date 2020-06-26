import React from 'react';

const Input = (props) => {
	const type = props.type;
	const name = props.name;
	const onChange = props.onChange;
	const onBlur = props.onBlur;
	const value = props.value;
	const placeholder = props.placeholder;

	return (
		<input
			type={type}
			name={name}
			onChange={onChange}
			onBlur={onBlur}
			value={value}
			placeholder={placeholder}
		/>
	);
};

export default Input;
