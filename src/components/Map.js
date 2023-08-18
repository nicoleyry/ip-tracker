import { useEffect, useState } from 'react';
import '../styles/map.scss';
import '../../node_modules/leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';

const zoom = 13;

const LocationMaker = ({ position, setPosition }) => {
	const locationIcon = new Icon({
		iconUrl: 'icon-location.svg',
		iconSize: [23, 28],
	});
	const map = useMap();

	useEffect(() => {
		map.locate().on('locationfound', function (e) {
			setPosition([e.latlng.lat, e.latlng.lng]);
			map.flyTo(e.latlng, map.getZoom());
		});
	}, [map, setPosition]);

	return (
		<Marker position={position} icon={locationIcon}>
			<Popup>You are here: <br />[<b>{position[0]}</b>, <b>{position[1]}</b>]</Popup>
		</Marker>
	);
};

export default function Map({ data, position, setPosition }) {
	const [map, setMap] = useState(null);

	useEffect(() => {
		if (data !== null) {
			setPosition([data.location.lat, data.location.lng]);
		}
	}, [data, setPosition]);

	useEffect(() => {
		if (map !== null) {
			map.flyTo(position, map.getZoom());
		}
	}, [map, position]);

	return (
		<MapContainer center={position} zoomControl={false} zoom={zoom} scrollWheelZoom={true} ref={setMap}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<LocationMaker position={position} setPosition={setPosition}/>
		</MapContainer>
	);
}
