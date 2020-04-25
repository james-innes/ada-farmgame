import React from 'react';
import {useSelector} from 'react-redux';
import Field from '../Field';

const Farm = () => {
	return (
		<>
			{useSelector(
				(state: any) => state.farm.fields,
			).map((field: any) => (
				<Field todo={field} key={field.id} />
			))}
		</>
	);
};

export default Farm;
