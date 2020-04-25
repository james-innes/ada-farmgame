import {
	createSlice,
	PayloadAction,
} from 'redux-starter-kit';
import uuid from 'uuid';
import Farm from '../../components/Farm/Farm.d';
import Field from '../../components/Field/Field.d';
import Item from '../../components/Market/Item.d';
import Animal from '../../components/Animal/Animal.d'

const initialState: Farm = {
	id: uuid(),
	name: 'My Farm',
	createdBy: 'Your Name',
	createdDate: '',
	lastPlayed: '',
	coins: 100,
	inventory: {
		cow: 20,
		sheep: 20,
		milk: 25,
		wool: 35,
		chicken: 35,
		beef: 30,
		lamb: 30,
		straw: 10,
		hay: 10,
	},
	fields: [
		{
			id: uuid(),
			age: 0,
			infertile: false,
			dimensions: {
				x: 25,
				y: 25,
				width: 350,
				height: 175,
			},
			contents: [
				{
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
				}
			],
		}
	],
	market: {
		items: [
			{
				name: 'Milk',
				price: 1,
				unit: 'Liters',
				count: 100,
			},
			{
				name: 'Beef',
				price: 25,
				unit: 'Bits',
				count: 100,
			},
			{
				name: 'Lamp',
				price: 25,
				unit: 'Slices',
				count: 100,
			},
			{
				name: 'Chicken',
				price: 15,
				unit: 'Bits',
				count: 100,
			},
			{
				name: 'GreenGas',
				price: 1,
				unit: 'Barrels',
				count: 100,
			},
			{
				name: 'Egg',
				price: 2,
				unit: '',
				count: 100,
			},
			{
				name: 'Wool',
				price: 7,
				unit: 'Bags',
				count: 100,
			},
			{
				name: 'Corn',
				price: 2,
				unit: 'Liters',
				count: 100,
			},
			{
				name: 'Bread',
				price: 5,
				unit: 'Loafs',
				count: 100,
			},
			{
				name: 'Straw',
				price: 5,
				unit: 'Liters',
				count: 100,
			},
			{
				name: 'Solar Panel',
				price: 10000,
				unit: 'Liters',
				count: 100,
			},
			{
				name: 'Grass Seed',
				price: 2,
				unit: 'Liters',
				count: 100,
			},
		],
	},
};

interface IMarketTrade {
	item: Item;
	qty: number;
	type: string;
};

interface IAddField {
	field: Field;
};

interface IAddFieldContent {
	content: Animal | any;
	fieldId: string;
};

interface IUpdateInventoryItem {
	name: string;
	amount: number;
	operator: string;
};

interface IYieldProduce extends Animal {};
interface IYieldProduct extends Animal {};
interface IConsumeFood extends Animal {};


export const farmSlice = createSlice({
	slice: 'farm',
	initialState,
	reducers: {
		marketTrade(
			state,
			action: PayloadAction<IMarketTrade>
		) {
			const farm: Farm = state;
			const qty = action.payload.qty;
			const item = state.market.items.find(
				x => x.name === action.payload.item.name,
			);
			switch (action.payload.type) {
				case 'farmer-buy':
					item && (item.count -= qty);
					farm && item && ((farm.inventory as any)[item.name] += qty);
					farm && item &&
						(farm.coins -= item.price * qty);
				case 'farmer-sell':
					farm && item && (item.count += qty);
					farm && item && ((farm.inventory as any)[item.name] -= qty);
					farm && item &&
						(farm.coins += item.price * qty);
				default:
					return state;
			}
		},
		addField(state, action: PayloadAction<IAddField>) {
			state.fields.push(action.payload.field);
		},
		addFieldContent(state, action: PayloadAction<IAddFieldContent>) {
			const field = state.fields.find((field: Field) => field.id == action.payload.fieldId)
			let content = action.payload.content
			content.fieldId = action.payload.fieldId
			field && field.contents.push(action.payload.content);
		},
		updateInventoryItem(state, action: PayloadAction<IUpdateInventoryItem>) {
			const {name, amount, operator} = action.payload
			switch (operator){
			case 'plus':
				state && ((state.inventory as any)[name] += amount)
			case 'minus':
					state && ((state.inventory as any)[name] -= amount)
			};
		},
		yieldProduce(state, action: PayloadAction<IYieldProduce>){
			state && ((state.inventory as any)['produce'] += Math.abs(5 - action.payload.hunger))
			const field = state.fields.find((field: Field) => field.id === action.payload.fieldId)
			const animal = field.contents.find((animal: Animal) => animal.id === action.payload.id)
			animal && (animal.hunger += 5)
		},
		yieldProduct(state, action: PayloadAction<IYieldProduct>){
			const {hunger} = action.payload;
			let amount = hunger > 0 ? 100 / hunger : 120;
			state && ((state.inventory as any)['product'] += hunger > 0 ? 100 / hunger : 120)
		},
		consumeFood(state, action: PayloadAction<IConsumeFood>){
			const {consumes, hunger} = action.payload;

			if (hunger <= 5 && hunger !== 0) {
				if ((state.inventory as any)[consumes] > 0) {
					state && ((state.inventory as any)[consumes] -= 1)
					const field = state.fields.find((field: Field) => field.id === action.payload.fieldId)
					const animal = field.contents.find((animal: Animal) => animal.id === action.payload.id)
					animal && (animal.hunger -= 1)
				} else if (hunger < 5) {
					const field = state.fields.find((field: Field) => field.id === action.payload.fieldId)
					const animal = field.contents.find((animal: Animal) => animal.id === action.payload.id)
					animal && (animal.hunger += 1)
				}
			}
		}
	}
});

export const { marketTrade, addField, addFieldContent, updateInventoryItem, yieldProduce, yieldProduct, consumeFood, slaughter} = farmSlice.actions;

export default farmSlice.reducer;
