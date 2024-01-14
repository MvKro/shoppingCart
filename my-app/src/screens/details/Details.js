import {useContext, useEffect, useState} from "react";
import {ProviderContext} from "../../providers/ProductsProvider";
import {NavLink, useParams} from "react-router-dom";
import {CartContext} from "../../providers/CartProvider";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "../../components/carousel/carousel";
import styles from './Details.module.scss'

function Details() {
    const {id} = useParams();
    const { searchProducts } = useContext(ProviderContext);
    const { addProduct } = useContext(CartContext);
    const [product, setProduct] = useState(null);
    const [supplierList, setSupplierList] = useState([]);
    useEffect(() => {
        searchProducts(Number(id)).then((_product) => {
            setProduct(_product);       
        })

        fetch('https://gorest.co.in/public/v2/users')
            .then((response) => response.json())
            .then((data) => {
                setSupplierList(data);
            });
     
    }, [id]);
    
    const addToCart = () => {
        addProduct(product);
    }
    
    return (
        <div>
            <NavLink className={`${styles.backLink}`} to="/">{"<< Back"}</NavLink>
            <div className="card">
                <Carousel product={product}></Carousel>
                <div className="card-body">
                    <h5 className={`${styles.textLeft} card-title`}>{product?.title}</h5>
                    <p className={`${styles.textLeft} card-text`}>{product?.description}</p>
                    <p className={`${styles.textLeft} card-text`}>${product?.price}</p>
                    <div>
                        <label className={`${styles.bold} card-text`}>Supplier:</label>
                        <select>
                            {supplierList.filter(supplier => supplier.status === 'active').map((supplier) => (
                                <option key={supplier.id} value={supplier.id}>
                                    {supplier.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className={`${styles.cartButton}`} onClick={addToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default Details;