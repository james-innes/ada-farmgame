import Animal from '../Animal';
import {default as IAnimal} from '../Animal/Animal.d';
import Field from './Field.d';

import './Field.css';

const Field = (props: any) => {
	const field: Field = props.field;

	return (
		<div>
			<rect
				className="Field"
				style={{
					top: field.dimensions.x,
					left: field.dimensions.y,
					width: field.dimensions.width,
					height: field.dimensions.height,
				}}
			/>

			{field.contents
				.filter(
					(content: any) =>
						content.type === 'Animal',
				)
				.map((animal: IAnimal) => (
					<Animal props={animal} />
				))}
		</div>
	);
};

export default Field;
