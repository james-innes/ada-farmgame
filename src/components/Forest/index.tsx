import React, {useState} from 'react';

const Forest = () => {
	const [treeCount] = useState(15);

	for (let i = 0; i < treeCount; i++) {}

	return <div className="Forest"></div>;
};

export default Forest;
