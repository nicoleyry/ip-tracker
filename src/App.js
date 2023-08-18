import { useState, useEffect } from 'react';
import './App.scss';
import TopSearch from './components/TopSearch';
import Map from './components/Map';
import InfoDisplay from './components/InfoDisplay';
import axios from 'axios';

function App() {
	const [searchValue, setSearchValue] = useState('');
	const [checkValue, setCheckValue] = useState(false);
	const [data, setData] = useState(null);
	const [position, setPosition] = useState([51.505, -0.09]);

	useEffect(() => {
		if (checkValue && searchValue !== '') {
			axios
				.get(
					`https://geo.ipify.org/api/v2/country,city?apiKey=at_x9axcfyvYV2uOZWT76E1oZnUIsdYY&ipAddress=${searchValue}`
				)
				.then((response) => {
					setData(response.data);
				});

			setCheckValue(false);
		} else {
			return;
		}
	}, [checkValue, searchValue]);

	return (
		<div className='App'>
			<div className='app-container'>
				<TopSearch searchValue={searchValue} setSearchValue={setSearchValue} setCheckValue={setCheckValue} />
				<Map data={data} position={position} setPosition={setPosition}/>
			</div>
			<div className='display-container'>
				<InfoDisplay data={data} />
			</div>
		</div>
	);
}

export default App;
