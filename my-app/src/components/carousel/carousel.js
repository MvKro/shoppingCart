import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Carousel.module.scss'
import './Carousel.scss'
import black from '../../img/black.png';
import blue from '../../img/blue.png';
import red from '../../img/red.png';

const mapping = {
    'black': black,
    'blue': blue,
    'red': red
}

export const Carousel = ({product}) => {
    return (
        <ReactCarousel 
            showStatus={false}
            renderThumbs = {(props) => {
            return product.colors.map((color, index) => (
                <button key={color}>{color}</button>
            ))
        }}>
            {product?.colors.map((color, index) => (
                <div key={color}>
                    <img src={mapping[color]} alt={`Color ${color}`} />
                    <p className={`${styles.legend}`}>{color.name}</p>
                </div>
            ))}
        </ReactCarousel>
    )
}