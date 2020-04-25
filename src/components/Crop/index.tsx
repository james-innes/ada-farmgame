import React from 'react';
import {Image} from 'react-bootstrap';
import Crop from './Crop';

const Crop: React.FC<Crop> = props => (
	<Image className={name} src={props.imgPath} />
);

export default Crop;
