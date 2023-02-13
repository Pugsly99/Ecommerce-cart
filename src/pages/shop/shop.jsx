import React from 'react';
import Product from './product';

import './shop.css';
import { PRODUCTS } from '../../products';

const Shop = () => {
	console.log(PRODUCTS);
	return (
		<div className='shop'>
			<div className='shopTitle'>
				<h1> RyGuys Tech </h1>
			</div>
			<div className='products'>
				{PRODUCTS.map((product) => (
					<Product data={product} />
				))}
			</div>
		</div>
	);
};

export default Shop;
