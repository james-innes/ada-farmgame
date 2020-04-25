import Field from '../Field/Field';
import Market from '../Market/Market.d';

interface Farm {
	id: string;
	name: string;
	createdBy: string;
	createdDate: string;
	lastPlayed: string;
	coins: number
	inventory: {
		cow: number,
		sheep: number,
		milk: number,
		wool: number,
		chicken: number,
		beef: number,
		lamb: number,
		straw: number,
		hay: number,
	};
	fields: Array<Field>;
	market: Market;
}

export default Farm;
