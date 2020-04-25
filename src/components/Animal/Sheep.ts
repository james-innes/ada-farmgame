import Animal from './Animal.d';
import uuid from 'uuid';

const Sheep: Animal = {
	id: uuid(),
	type: 'Animal',
	name: 'Sheep',
	genus: 'Sheep',
	consumes: 'Grass',
	produce: 'Whool',
	product: 'Mutton',
	imgPath: '/img/twtr/1F411.png',
	fieldId: '',
	hunger: 5,
};

export default Sheep;
