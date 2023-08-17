import { useState, useEffect, useRef } from 'react';
import './App.scss';
import TopSearch from './components/TopSearch';
import Map from './components/Map';
import axios from 'axios';

function App() {
	const [searchValue, setSearchValue] = useState('Search for any IP address or domain');
	const [checkValue, setCheckValue] = useState(false);
	let dataRef = useRef(null);

	useEffect(() => {
		if (checkValue) {
			axios
				.get(
					`https://geo.ipify.org/api/v2/country?apiKey=at_x9axcfyvYV2uOZWT76E1oZnUIsdYY&ipAddress=${searchValue}`
				)
				.then((response) => {
					dataRef.current = response.data;
				});

			setCheckValue(false);
			console.log('dataRef', dataRef.current);
		} else {
			return;
		}
	}, [checkValue, searchValue]);

	return (
		<div className='App'>
			<div className='app-container'>
				<TopSearch searchValue={searchValue} setSearchValue={setSearchValue} setCheckValue={setCheckValue} />
				<Map />
			</div>
		</div>
	);
}

export default App;
