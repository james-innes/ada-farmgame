import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {userSlice} from '../../redux/slices/userSlice';
import {
	Form,
	Col,
	Button,
	InputGroup,
} from 'react-bootstrap';

const SignIn = () => {
	const dispatch = useDispatch();

	const [validated, setValidated] = useState(false);
	const [
		passwordValidity,
		setPasswordValidity,
	] = useState(undefined);

	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');

	const handleSubmit = (e: React.FormEvent<any>) => {
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		}
		setValidated(true);
		dispatch(userSlice.actions.loginUser());
	};

	const handlePassword = (e: React.ChangeEvent<any>) => {
		setPassword(e.target.value);
		if (e.target.value !== 'correct password') {
			setValidated(false);
			setPasswordValidity(true);
		} else {
			setPasswordValidity(undefined);
		}
	};

	return (
		<Form
			noValidate
			validated={validated}
			onSubmit={handleSubmit}>
			<Form.Row>
				<Form.Group
					as={Col}
					md="2"
					controlId="username">
					<Form.Label>Username</Form.Label>
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text id="inputGroupPrepend">
								@
							</InputGroup.Text>
						</InputGroup.Prepend>
						<Form.Control
							value={username}
							onChange={(e: any) =>
								setUsername(e.target.value)
							}
							type="text"
							placeholder="Username"
							aria-describedby="inputGroupPrepend"
							required
						/>
						<Form.Control.Feedback type="invalid">
							Please choose a username.
						</Form.Control.Feedback>
					</InputGroup>
				</Form.Group>
			</Form.Row>

			<Form.Row>
				<Form.Group
					as={Col}
					md="3"
					controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						value={password}
						onChange={handlePassword}
						type="text"
						placeholder="Password"
						isInvalid={passwordValidity}
					/>
					<Form.Control.Feedback type="invalid">
						Please provide a valid password
					</Form.Control.Feedback>
				</Form.Group>
			</Form.Row>

			<Button type="submit">Sign In</Button>
		</Form>
	);
};

export default SignIn;
