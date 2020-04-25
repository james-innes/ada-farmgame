import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Motion, spring} from 'react-motion';
import {ReactMotionLoop} from 'react-motion-loop';
import {Image} from 'react-bootstrap';
import {addFieldContent} from '../../redux/slices/farmSlice';
import Field from '../Field/Field.d';
import './index.css';

const Player = () => {
	const [x, setX] = useState(150);
	const [y, setY] = useState(150);
	const [velocity] = useState(25);

	const dispatch = useDispatch();

	var fieldId: string = useSelector(
		(state: any) => state.farm.fields,
	).map((field: Field) => {
		let f = field.dimensions;
		x + 72 < f.x + f.width &&
		x > f.x &&
		y > f.y &&
		y + 72 < f.y + f.height
			? field.id
			: '';
	});

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key == 'Enter') {
			dispatch(
				addFieldContent({
					content: 'could be anything',
					fieldId,
				}),
			);
		}

		switch (e.key) {
			case 'ArrowLeft':
				return setX(x - velocity);
			case 'ArrowRight':
				return setX(x + velocity);
			case 'ArrowUp':
				return setY(y - velocity);
			case 'ArrowDown':
				return setY(y + velocity);
			default:
				return null;
		}
	};

	useEffect(() => {
		window.onkeydown = handleKeyDown;
	});

	return (
		<div className="Tractor">
			<Motion style={{x: spring(x), y: spring(y)}}>
				{({x, y}) => (
					<div
						className="Tractor-Navigation"
						style={{
							WebkitTransform: `translate3d(${x}px, ${y}px, 0)`,
							transform: `translate3d(${x}px, ${y}px, 0)`,
						}}>
						<ReactMotionLoop
							styleFrom={{top: spring(0)}}
							styleTo={{
								top: spring(5, {
									damping: 0,
								}),
							}}>
							{(style: any) => (
								<Image
									style={style}
									src={'/farmer.png'}
								/>
							)}
						</ReactMotionLoop>
					</div>
				)}
			</Motion>
		</div>
	);
};

export default Player;
