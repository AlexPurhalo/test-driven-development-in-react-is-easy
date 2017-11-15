import React       from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import ProductList from './ProductList'

const products= [
	{id: 1, name: 'Mock Product 1', brand: 'MockBrandA'},
	{id: 2, name: 'Mock Product 2', brand: 'MockBrandB'},
	{id: 3, name: 'Mock Product 3', brand: 'MockBrandC'},
]

const wrapper = shallow(<ProductList {...{products}} />)

const firstElement = wrapper.find('li').first()

it('should render a list of products as unordered list', () => {
	expect(wrapper.find('li').length).toEqual(products.length)
})


it ('should display the product name in each `li` element', () => {
	expect(firstElement.contains(products[0].name))
})

it('should display the brand name in each `li` element', () => {
	expect(firstElement.contains(products[0].brand))
})
