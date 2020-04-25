import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Button} from 'react-bootstrap';
import {createFarm} from '../../redux/slices/farmSlice';
import Farm from './Farm.d';

const CreateFarm = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const createdBy: string = useSelector(
		(state: any) => state.user.id,
	);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (name.trim() === '') return null;
		dispatch(
			createFarm({
				name,
				createdBy,
			}),
		);
		setName('');
	};

	const handleChange = (e: any) => {
		setName(e.target.value);
	};

	return (
		<div className="CreateFarm">
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label>Farm Name</Form.Label>
					<Form.Control
						className="p-3"
						type="text"
						placeholder="Name your saved farm"
						value={name}
						onChange={handleChange}
					/>
					<Form.Text className="text-muted">
						You can change this later
					</Form.Text>
				</Form.Group>
				<Button variant="primary" type="submit">
					Create Farm
				</Button>
			</Form>
		</div>
	);
};

export default CreateFarm;
