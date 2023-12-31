import { useState } from 'react';
import '../styles/topsearch.scss';
import { isIP } from 'is-ip';

export default function TopSearch({ searchValue, setSearchValue, setCheckValue }) {
	const [error, setError] = useState(null);

	const isValidInput = (value) => {
		let re = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/);
		return isIP(value) || value.match(re);
	};

	const handleChange = (e) => {
		setCheckValue(false);
		if (!isValidInput(e.target.value)) {
			setError(true);
		} else {
			setError(false);
		}
		setSearchValue(e.target.value);
	};

	const searchHandler = (e) => {
		e.preventDefault();
		e.target[0].value === '' ? setCheckValue(false) : setCheckValue(true);
	};

	const keyDownHandler = (key) => {
		if (key.code === 'Enter') {
			key.target.value === '' ? setCheckValue(false) : setCheckValue(true);
		}
	};

	return (
		<div className='top-search'>
			<p className='title'>IP Address Tracker</p>
			<form className='search-container' method='post' onSubmit={searchHandler} onKeyDown={keyDownHandler}>
				<input
					className='search-input'
					type='text'
					onChange={handleChange}
					value={searchValue}
					placeholder='Search for any IP address or domain'
					onClick={() => setSearchValue('')}
				/>
				<input className='search-btn' type='submit' value='' />
				{error && <p className='error-msg'>Please enter a valid IP address or domain</p>}
			</form>
		</div>
	);
}
