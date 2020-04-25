import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import InventoryDashboard from './InventoryDashboard';
import FieldDashboard from './FieldDashboard';
import MarketDashboard from './MarketDashboard';
import './index.css';

const Dashboard = () => {
	const [mute, setMute] = useState(false);

	const handleToggleMute = () => setMute(!mute);

	return (
		<div className="Dashboard">
			<InventoryDashboard />
			<FieldDashboard />
			<MarketDashboard />
			<Button
				variant="primary"
				onClick={handleToggleMute}>
				{mute ? 'Unmute' : 'Mute'}
			</Button>
		</div>
	);
};

export default Dashboard;
