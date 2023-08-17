import { useEffect } from 'react';
import '../styles/infodisplay.scss';

export default function InfoDisplay({data}) {

	useEffect(() => {
		if(data !== null) {
			console.log(data);
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
			<InfoBlock title={'IP Address'} content={'192.212.174.101'} />
			<InfoBlock title={'Location'} content={'Brooklyn, NY 10001'} />
			<InfoBlock title={'Timezone'} content={'UTC -05:00'} />
			<InfoBlock title={'ISP'} content={'SpaceX Starlink'} />
		</div>
	);
};