import Animal from '../Animal/Animal';

interface Field {
	id: string;
	age: number;
	infertile: boolean;
	contents: Array<Animal | any>;
	dimensions: {
		x: number
		y: number,
		width: number,
		height: number,
	}
}

export default Field;
