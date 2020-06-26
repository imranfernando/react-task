import React from 'react';
import { Formik } from 'formik';
import { IconContext } from 'react-icons';
import { FaSearch } from 'react-icons/fa';
import Input from '../../FormField/Input';

const SearchBox = () => {
	return (
		<Formik initialValues={{ search: '' }}>
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
					<div className='search-controller'>
						<Input
							type='text'
							name='search'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.search}
							placeholder='Search...'
						/>
						<button
							type='submit'
							disabled={isSubmitting}
							className='search-btn'
						>
							<IconContext.Provider value={{ className: 'search-icon' }}>
								<div className='search-icon-holder'>
									<FaSearch />
								</div>
							</IconContext.Provider>
						</button>
					</div>
				</form>
			)}
		</Formik>
	);
};

export default SearchBox;
