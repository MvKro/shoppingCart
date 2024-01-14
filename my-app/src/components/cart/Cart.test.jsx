import React from 'react'
import {render, screen } from '@testing-library/react'
import { Cart } from "./Cart";
import { CartContext } from '../../providers/CartProvider';


describe('Cart Component', () => {
    test('should render without crashing', () => {
        const mockProductList = []
        render(
            <CartContext.Provider value={{ productList: mockProductList }}>
                <Cart />
            </CartContext.Provider>
        );

        const imgElement = screen.getByAltText('cartIcon');
        expect(imgElement).toBeInTheDocument();

        const spanElement = screen.getByText(mockProductList.length.toString());
        expect(spanElement).toBeInTheDocument();
      
    });
});