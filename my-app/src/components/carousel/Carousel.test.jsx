import React from 'react';
import { render, screen } from '@testing-library/react';
import { Carousel } from './carousel';

describe('Carousel Component', () => {
    test('should render without crashing', () => {
        const mockProduct = {
            colors: ['black', 'blue', 'red']
        };

        render(<Carousel product={mockProduct} />);

        mockProduct.colors.forEach(color => {
            const imgElement = screen.getByAltText(`Color ${color}`);
            expect(imgElement).toBeInTheDocument();

            const colorNameElement = screen.getByText(color);
            expect(colorNameElement).toBeInTheDocument();
        });
    });
});