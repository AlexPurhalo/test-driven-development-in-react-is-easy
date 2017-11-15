import React     from 'react'
import PropTypes from 'prop-types'

const ProductList = ({ products }) => (
	<ul>
		{products.map(({ id, name, brand }) =>
			<li key={id}>{name}, {brand}</li>
		)}
	</ul>
)


ProductList.propTypes = {
	products: PropTypes.array.isRequired
};

export default ProductList