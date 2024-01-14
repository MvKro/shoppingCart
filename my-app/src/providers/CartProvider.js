import React, {useEffect, useState} from "react";
import {Popup} from "../components/popup/Popup";

export const CartContext = React.createContext();
export function CartProvider({children}) {
    const [productList, setProductList] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const savedProducts = JSON.parse(localStorage.getItem('productsList'));
        if (savedProducts?.length > 0) {
            setProductList(savedProducts);
        } 
    }, []);

    const addProduct = (product) => {
        setProductList([...productList, product]);
        localStorage.setItem('productList', JSON.stringify(productList));
        setShowPopup(true)
    }
    return(
        <CartContext.Provider value={{productList, addProduct}}>
            {showPopup && <Popup onClose={() => setShowPopup(false)} />}
            { children }
        </CartContext.Provider>
    )
}