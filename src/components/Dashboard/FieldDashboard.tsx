import React from 'react';
import { Button, Table, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {yieldProduce, yieldProduct} from '../../redux/slices/farmSlice';
import Field from '../Field/Field.d';

const FieldDashboard = () => {
	const dispatch = useDispatch();
	const id = ''; //TODO get Id of field user is hovering over

	const field = useSelector((state: any) =>
		state.farm.fields.find(
			(field: Field) => field.id === id,
		),
	);

	const handleCollectProduce = () =>
		field.contents.map((item: any) =>
			dispatch(yieldProduce(item)),
		);

	const handleCollectProduct = () =>
		field.contents.map((item: any) => dispatch(yieldProduct(item)));

	var occurrences: any = {};
	field.contents.forEach((x: any, i: any) => {
		if ((!occurrences as any)[x.name]) {
			(occurrences as any)[x.name] = [i];
		} else {
			(occurrences as any)[x.name].push(i);
		}
	});

	const contents = Object.keys(occurrences)

	return (
		<div className="FieldDashboard">
			<div className="fieldItem">
				<Table>
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Count</th>
						</tr>
					</thead>
					<tbody>
						{contents.map((name) => (
							<tr>
								<td>
									<h6>{name}</h6>
								</td>
								<td>
									<Image
										src={(field.contents as any)[name].imgUrl}
										alt={name}
									/>
								</td>
								<td>
									{(occurrences as any)[name].length}
								</td>
								<td>
									<Button
										variant="primary"
										onClick={
											handleCollectProduce
										}>
										Collect Produce
									</Button>
								</td>
								<td>
									{' '}
									<Button
										variant="primary"
										onClick={
											handleCollectProduct
										}>
										Slaughter
									</Button>
								</td>
							</tr>
						))}

					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default FieldDashboard;
