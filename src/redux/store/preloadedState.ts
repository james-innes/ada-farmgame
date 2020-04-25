import User from '../../components/User/User.d';
import Farm from '../../components/Farm/Farm.d';
import uuid from 'uuid';

interface IPreloadedState {
	misc: {[key: string]: boolean};
	user: User;
	farm: Farm;
}

const preloadedState: IPreloadedState = {
	misc: {
		muted: false,
	},
	user: {
		id: uuid(),
		firstName: '',
		lastName: '',
		email: 'string',
		username: '',
		city: '',
		state: '',
		country: '',
		postcode: '',
		emailAddress: '',
	},
	farm: {
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
					},
				],
			},
			{
				id: uuid(),
				age: 0,
				infertile: false,
				dimensions: {
					x: 475,
					y: 25,
					width: 200,
					height: 325,
				},
				contents: [
					{
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
					},
				],
			},
			{
				id: uuid(),
				age: 0,
				infertile: false,
				dimensions: {
					x: 25,
					y: 225,
					width: 350,
					height: 125,
				},
				contents: [
					{
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
					},
				],
			},
			{
				id: uuid(),
				age: 0,
				infertile: false,
				dimensions: {
					x: 25,
					y: 375,
					width: 350,
					height: 125,
				},
				contents: [
					{
						id: uuid(),
						growthSpeed: 5,
						imgPath: '/img/twtr/1f33d.png',
					},
				],
			},
			{
				id: uuid(),
				age: 0,
				infertile: false,
				dimensions: {
					x: 25,
					y: 525,
					width: 350,
					height: 125,
				},
				contents: [
					{
						id: uuid(),
						growthSpeed: 5,
						imgPath: '/img/twtr/1F424.png',
					},
				],
			},
			{
				id: uuid(),
				age: 0,
				infertile: false,
				dimensions: {
					x: 475,
					y: 375,
					width: 200,
					height: 150,
				},
				contents: [
					{
						id: uuid(),
						growthSpeed: 5,
						imgPath: '/img/twtr/1f33e.png',
					},
				],
			},
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
	},
};

export default {preloadedState};
