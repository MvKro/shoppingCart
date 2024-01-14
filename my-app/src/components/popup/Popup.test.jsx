import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import {Popup} from "./Popup";

describe('Popup component', () => {
    test('should render without crashing', async () => {
        
        render(<Popup></Popup>);
        const popupText = screen.getByText('Product successfully added to your shopping cart!');
        const popupElement = popupText.parentElement;
        expect(popupText).toBeInTheDocument();

        await waitFor(() => expect(popupElement).toHaveClass('hidden'), { timeout: 2000 });
    })
})

