import cartImg from '../../img/cart.png'
import styles from './Cart.module.scss'
import './Cart.scss'
import {useContext} from "react";
import {CartContext} from "../../providers/CartProvider";
export const Cart = () => {
    const {productList} = useContext(CartContext);
    return (
        <div className='wrapper'>
            <img alt="cartIcon" width={100} height={100} src={cartImg}></img>
            <span className={`${styles.chip} chip`}>{productList?.length}</span>
        </div>
    )
}