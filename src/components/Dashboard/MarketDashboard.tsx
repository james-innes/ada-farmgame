import React from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {marketTrade} from '../../redux/slices/farmSlice';
import Item from '../Market/Item.d';

const MarketDashboard = () => {
	const dispatch = useDispatch();
	const farm = useSelector((state: any) => state.farm);

	const handleTrade = (item: Item) => (e: any) => {
		e.preventDefault();
		if (e.target.name != null) {
			dispatch(
				marketTrade({
					item,
					qty: e.target.name['qty'].value,
					type: e.target.name['id'],
				}),
			);
		}
	};

	return (
		<div className="MarketDashboard">
			<h2>Market</h2>
			<p>Welcome you can buy and sell here</p>
			{farm.market.items.map((item: Item) => (
				<Form onSubmit={() => handleTrade(item)}>
					<Form.Row>
						<Col>
							<Form.Label>
								{item.name}: {item.price}{' '}
								per {item.unit}
							</Form.Label>
						</Col>

						<Col>
							<Form.Group controlId="marketTradeQty">
								<Form.Label>Qty</Form.Label>
								<Form.Control
									type="number"
									placeholder="Qty"
									id="qty"
									value={''}
								/>
							</Form.Group>
						</Col>

						<Col>
							<div
								key={`default-radio`}
								className="mb-3">
								<Form.Check
									type={'radio'}
									label="Buy"
									id={`farmer-buy`}
								/>

								<Form.Check
									type={'radio'}
									label="Sell"
									id={`farmer-buy`}
								/>
							</div>
						</Col>

						<h3> </h3>
						<Button
							variant="primary"
							type="submit">
							Submit
						</Button>
					</Form.Row>
				</Form>
			))}
		</div>
	);
};

export default MarketDashboard;
