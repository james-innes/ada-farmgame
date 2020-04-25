import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {userSlice} from '../../redux/slices/userSlice';
import uuid from 'uuid';
import zxcvbn from 'zxcvbn';
import {
	Form,
	Col,
	Button,
	InputGroup,
} from 'react-bootstrap';

const SignUp = () => {
	const dispatch = useDispatch();

	const [validated, setValidated] = useState(false);
	const [
		passwordValidity,
		setPasswordValidity,
	] = useState(false);
	const [
		passwordFeedback,
		setPasswordFeedback,
	] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [city, setCity] = useState('');
	const [zipcode, setZipcode] = useState('');
	const [terms, setTerms] = useState(false);

	const handleSubmit = (e: React.FormEvent<any>) => {
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		}
		setValidated(true);
		dispatch(
			userSlice.actions.createUser({
				id: uuid(),
				firstName,
				lastName,
				email,
				password,
				username,
				city,
				zipcode,
			}),
		);
	};

	const handlePassword = (e: React.ChangeEvent<any>) => {
		setPassword(e.target.value);
		let result = zxcvbn(e.target.value);
		if (result.score <= 1) {
			setValidated(false);
			setPasswordValidity(false);
			setPasswordFeedback(result.feedback.warning);
		} else {
			setPasswordValidity(true);
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
					controlId="firstName">
					<Form.Label>First name</Form.Label>
					<Form.Control
						value={firstName}
						onChange={(e: any) =>
							setFirstName(e.target.value)
						}
						required
						type="text"
						placeholder="First name"
						defaultValue="Mark"
					/>
					<Form.Control.Feedback>
						Looks good!
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group
					as={Col}
					md="2"
					controlId="lastName">
					<Form.Label>Last name</Form.Label>
					<Form.Control
						value={lastName}
						onChange={(e: any) =>
							setLastName(e.target.value)
						}
						required
						type="text"
						placeholder="Last name"
						defaultValue="Otto"
					/>
					<Form.Control.Feedback>
						Looks good!
					</Form.Control.Feedback>
				</Form.Group>
			</Form.Row>
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
					controlId="email">
					<Form.Label>Email</Form.Label>
					<InputGroup>
						<Form.Control
							value={email}
							onChange={(e: any) =>
								setEmail(e.target.value)
							}
							type="email"
							placeholder="Email"
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
					md="2"
					controlId="city">
					<Form.Label>City</Form.Label>
					<Form.Control
						value={city}
						onChange={(e: any) =>
							setCity(e.target.value)
						}
						type="text"
						placeholder="City"
						required
					/>
					<Form.Control.Feedback type="invalid">
						Please provide a valid city.
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group
					as={Col}
					md="1"
					controlId="zipcode">
					<Form.Label>Zipcode</Form.Label>
					<Form.Control
						value={zipcode}
						onChange={(e: any) =>
							setZipcode(e.target.value)
						}
						type="text"
						placeholder="Zipcode"
						required
					/>
					<Form.Control.Feedback type="invalid">
						Please provide a valid zipcode.
					</Form.Control.Feedback>
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
						{passwordFeedback}
					</Form.Control.Feedback>
				</Form.Group>
			</Form.Row>

			<Form.Group>
				<Form.Check
					checked={terms}
					onClick={(e: any) =>
						setTerms(e.target.value)
					}
					required
					label="Agree to terms and conditions"
					feedback="You must agree before submitting."
				/>
			</Form.Group>
			<Button type="submit">Submit form</Button>
		</Form>
	);
};

export default SignUp;
