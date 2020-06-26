import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '../../../components/Common/Button';
import Input from '../../../components/Common/FormField/Input';
import { IconContext } from 'react-icons';
import { FaLock } from 'react-icons/fa';

// Regular Expressions
const passwordRegExp = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;

const validationSchema = yup.object().shape({
	oldPassword: yup
		.string()
		.required('This field is mandatory.')
		.matches(
			passwordRegExp,
			'Your password must contain at least 6 characters long. Include at least a symbol & include both lower case & upper case characters.'
		),
	newPassword: yup
		.string()
		.required('This field is mandatory.')
		.matches(
			passwordRegExp,
			'Your password must contain at least 6 characters long. Include at least a symbol & include both lower case & upper case characters.'
		),
	confirmPassword: yup
		.string()
		.required('This field is mandatory.')
		.test('passwords-match', 'Passwords do not match.', function (value) {
			return this.parent.newPassword === value;
		}),
});

const FormChangePassword = () => {
	return (
		<div>
			<Formik
				initialValues={{
					oldPassword: '',
					newPassword: '',
					confirmPassword: '',
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<form onSubmit={handleSubmit}>
						<div className='form-controller'>
							<IconContext.Provider value={{ className: 'input-icon' }}>
								<FaLock />
							</IconContext.Provider>
							<Input
								type='password'
								name='oldPassword'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.oldPassword}
								placeholder='Old Password'
							/>
							<div className='input-error'>
								{errors.oldPassword &&
									touched.oldPassword &&
									errors.oldPassword}
							</div>
						</div>
						<div className='form-controller'>
							<IconContext.Provider value={{ className: 'input-icon' }}>
								<FaLock />
							</IconContext.Provider>
							<Input
								type='password'
								name='newPassword'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.newPassword}
								placeholder='New Password'
							/>
							<div className='input-error'>
								{errors.newPassword &&
									touched.newPassword &&
									errors.newPassword}
							</div>
						</div>
						<div className='form-controller'>
							<IconContext.Provider value={{ className: 'input-icon' }}>
								<FaLock />
							</IconContext.Provider>
							<Input
								type='password'
								name='confirmPassword'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.confirmPassword}
								placeholder='Confirm Password'
							/>
							<div className='input-error'>
								{errors.confirmPassword &&
									touched.confirmPassword &&
									errors.confirmPassword}
							</div>
						</div>
						<div className='form-controller'>
							<Button type='submit' name='Set Password' disabled={false} />
						</div>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default FormChangePassword;
