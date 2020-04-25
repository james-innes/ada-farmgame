import Animal from './Animal.d';
import uuid from 'uuid';

const Chicken: Animal = {
	id: uuid(),
	type: 'Animal',
	name: 'Chicken',
	genus: 'Chicken',
	consumes: 'Grain',
	produce: '',
	product: '',
	imgPath: '/img/twtr/1F424.png',
	fieldId: '',
	hunger: 5,
};

export default Chicken;
