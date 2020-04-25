import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ReactMotionLoop from 'react-motion-loop';
import {Image} from 'react-bootstrap';
import {consumeFood} from '../../redux/slices/farmSlice';
import Animal from './Animal.d';
import Field from '../Field/Field.d';

const Animal = (props: any) => {
	const dispatch = useDispatch();
	const {imgPath, fieldId} = props.animal;

	const field = useSelector((state: any) =>
		state.farm.fields.find(
			(field: Field) => field.id === fieldId,
		),
	);

	var pos: {[key: string]: any} = {x: 100, y: 100};
	const springConfig = {stiffness: 100};
	var translate = `translate3d(spring(${pos.x}, ${springConfig})px, spring(${pos.y}, ${springConfig})px, 0)`;
	var styleTemplate = {
		WebkitTransform: translate,
		transform: translate,
	};

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(consumeFood(props.animal));
		}, 1000 * 5);
		return () => clearInterval(interval);
	}, []);

	const styleTo = () => {
		Object.keys(pos).map(key => {
			const h = 16,
				w = 16;
			const bounce = 10;
			let r =
				Math.random() >= 0.1
					? 0
					: Math.random() >= 0.5
					? -0.1
					: 0.1;
			if (pos.key <= field.key) {
				r = -r * bounce;
				pos.key = field.key + 1;
			}
			key === 'x' && pos.x + w / 2 >= field.w
				? () => {
						pos[key] = +-r * bounce;
						pos.x = field.w - w / 2 - 1;
				  }
				: key === 'y' &&
				  pos.y - h + 1 >= field.y + field.h - h
				? () => {
						pos[key] = +-r * bounce;
						pos.y = field.y + field.h - h - 1;
				  }
				: null;
		});
		return styleTemplate;
	};

	return (
		<div className={name}>
			<audio
				src="/audio/animals/cow.mp3"
				autoPlay
				loop
			/>
			<ReactMotionLoop
				styleFrom={styleTemplate}
				styleTo={styleTo()}>
				{(style: any) => (
					<Image
						className={name}
						style={style}
						src={imgPath}
					/>
				)}
			</ReactMotionLoop>
		</div>
	);
};

export default Animal;
