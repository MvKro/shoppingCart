import React, {useEffect, useState} from "react";
import productsJson from "../products/products.json";


export const ProviderContext = React.createContext();

export function ProductsProvider({children}) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const savedProducts = JSON.parse(localStorage.getItem('products'));
        if (savedProducts?.length > 0) {
            setProducts(savedProducts);
        } else {
            fetchProducts().then((_products) => {
                setProducts(_products);
            });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);
    const searchProducts = async (id) => {
        if(!products.length) {
            const _products = await fetchProducts();
            return _products.find((element) => element.id === id);
        }
        return products.find((element) => element.id === id);
    }

    const fetchProducts = async () => {
        return new Promise((resolve) => {
            setTimeout(()=> {resolve(productsJson)},1000)
        });
    }
    return(
        <ProviderContext.Provider value={{products, setProducts, searchProducts, fetchProducts}}>
            {children}
        </ProviderContext.Provider>
    )
}