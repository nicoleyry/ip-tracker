import { useState } from 'react';
import './App.scss';
import TopSearch from './components/TopSearch';
import Map from './components/Map';


function App() {
	const [searchValue, setSearchValue] = useState('Search for any IP address or domain');

	return (
		<div className='App'>
			<div className="app-container">
				<TopSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
				<Map/>
			</div>
		</div>
	);
}

export default App;
