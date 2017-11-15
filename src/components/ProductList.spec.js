import React       from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import ProductList from './ProductList'

let mockProducts, wrapper, productSelectFn

beforeEach(() => {
	mockProducts= [
		{id: 1, name: 'Mock Product 1', brand: 'MockBrandA'},
		{id: 2, name: 'Mock Product 2', brand: 'MockBrandB'},
		{id: 3, name: 'Mock Product 3', brand: 'MockBrandC'},
	]
	
	productSelectFn = jest.fn();
	
	wrapper = shallow(
		<ProductList {...{
			products: mockProducts,
			onProductSelect: productSelectFn
		}} />
	)
})

afterEach(() => { productSelectFn.mockReset(); });

it('should render a list of products as unordered list', () => {
	expect(wrapper.find('li').length).toEqual(mockProducts.length)
})

it ('should display the product name in each `li` element', () => {
	const firstElement = wrapper.find('li').first()
	expect(firstElement.contains(mockProducts[0].name))
})

it('should display the brand name in each `li` element', () => {
	const firstElement = wrapper.find('li').first()
	expect(firstElement.contains(mockProducts[0].brand))
})

it('should call `props.onProductSelect` when an `li` is clicked', () => {
	const firstElement = wrapper.find('li').first()
	
	// We check that the function has not been called yet
	expect(productSelectFn.mock.calls.length).toEqual(0)
	
	// We click the `li`
	firstElement.simulate('click')
	
	// We check that the function has now been called
	expect(productSelectFn.mock.calls.length).toEqual(1)
	
	// We check it's been called with the right arguments
	expect(productSelectFn.mock.calls[0][0]).toEqual(mockProducts[0])
})