import React, { Component } from 'react';
import ProductList from './components/ProductList'

import './App.css';

class App extends Component {
	state = {
		selectedProducts: [],
		products: [
			{id: 1, name: 'AirMax 90', brand: 'Nike'},
			{id: 2, name: 'Yeezy', brand: 'Adidas'},
			{id: 3, name: 'Classic', brand: 'Reebok'}
		]
	}
	
	handleProductSelect = (product) =>
		this.setState(prevState => ({
			selectedProducts: [
				...prevState.selectedProducts,
				product
			]
		}))
	
	render() {
		return (
			<div className="App">
				<h1>My Product Store</h1>
				<p>You have selected {this.state.selectedProducts.length} product(s).</p>
				<ProductList {...{
					products:        this.state.products,
					onProductSelect: this.handleProductSelect
				}}/>
			</div>
		);
	}
}

export default App;
