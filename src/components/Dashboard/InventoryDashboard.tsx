import React from 'react';
import {useSelector} from 'react-redux';
import {ListGroup} from 'react-bootstrap';

const InventoryDashboard = () => {
	const inventory = useSelector(
		(state: any) => state.farm.inventory,
	);

	return (
		<div className="FarmDashboard">
			{inventory.map((item: number, i: number) => (
				<ListGroup>
					<ListGroup.Item>
						<h5 className="my-0">
							{(inventory as any)[i]}}:
						</h5>
						<span className="text-muted pull-right font-weight:bold">
							{item}
						</span>
					</ListGroup.Item>
				</ListGroup>
			))}
		</div>
	);
};

export default InventoryDashboard;
