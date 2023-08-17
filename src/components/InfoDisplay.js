import { useEffect, useState } from 'react';
import '../styles/infodisplay.scss';

export default function InfoDisplay({data}) {
	const [info, setInfo] = useState({
		ip: '-',
		location: '-',
		timezone: '-',
		isp: '-',
	});

	useEffect(() => {
		if(data !== null) {
			setInfo({
				ip: data.ip,
				location: `${data.location.region}, ${data.location.country} ${data.location.postalCode}`,
				timezone: `UTC ${data.location.timezone}`,
				isp: data.isp,
			});
		}
	}, [data]);

	const InfoBlock = ({ title, content }) => {		
		return (
			<div className='info-block'>
				<p className='title'>{title}</p>
				<p className='content'>{content}</p>
			</div>
		);
	};

	return (
		<div className="info-display">
			<InfoBlock title={'IP Address'} content={info.ip} />
			<InfoBlock title={'Location'} content={info.location} />
			<InfoBlock title={'Timezone'} content={info.timezone} />
			<InfoBlock title={'ISP'} content={info.isp} />
		</div>
	);
};