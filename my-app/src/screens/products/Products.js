import {useContext} from "react";
import {ProviderContext} from "../../providers/ProductsProvider";
import { Link } from "react-router-dom";
import styles from './Products.module.scss'
import black from '../../img/black.png';
import blue from '../../img/blue.png';
import red from '../../img/red.png';

const mapping = {
    'black': black,
    'blue': blue,
    'red': red
}
function Products() {
    const {products} = useContext(ProviderContext);
    return (
        <div className="App">
            <h1>Products</h1>
            <div className={`${styles.row}`}>
                {products.map((product,index) => (
                    <div className="col-md-3">
                        <div className={`${styles.card}`}>
                            <img src={mapping[product.colors[index]]} className={`${styles.cardImg}`}
                                 alt={product.name}/>
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <Link to={`/${product.id}`}>Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;