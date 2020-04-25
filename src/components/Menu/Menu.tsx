import React, {useState} from 'react';
import Drawer from 'react-motion-drawer';
import {Image} from 'react-bootstrap';
import Dashboard from '../Dashboard';
import './Dashboard.css';

const Menu = () => {
	const [isOpen, setOpen] = useState(true);

	const drawerProps = {
		overlayColor: 'rgba(255,255,255,0.6)',
		drawerStyle: {
			background: '#F9F9F9',
			boxShadow:
				"rgba(0, 0, 0, 0.188235) 0px 10px 20px, 'rgba(0, 0, 0, 0.227451') 0px 6px 6px",
		},
	};

	return (
		<div className="Dashboard">
			<Drawer
				right
				width={600}
				{...drawerProps}
				open={isOpen}
				onChange={(open: boolean) => setOpen(open)}
				noTouchOpen={false}
				noTouchClose={false}>
				{(val: any) => {
					var per = val / 300;
					<div
						style={{
							backgroundColor: `rgba(0, 184, 212, ${per})`,
							width: '100%',
							height: '100%',
						}}>
						<Dashboard />
					</div>;
				}}
			</Drawer>

			<ul className="Hamburger">
				<li
					style={{
						cursor: 'pointer',
						height: '100%',
					}}>
					<Image
						onClick={() => setOpen(!isOpen)}
						src="/img/twtr/1f468-200d-1f33e.png"
					/>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
