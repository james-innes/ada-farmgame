import Animal from './Animal.d';
import uuid from 'uuid';

const Cow: Animal = {
	id: uuid(),
	type: 'Animal',
	name: 'Cow',
	genus: 'Cow',
	consumes: 'Straw',
	produce: 'Milk',
	product: 'Beef',
	imgPath: '/img/twtr/1f404.png',
	fieldId: '',
	hunger: 5,
};

export default Cow;
