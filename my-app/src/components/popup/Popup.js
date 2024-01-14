import styles from "./Popup.module.scss"
import {useEffect, useState} from "react";
export function Popup({ onClose }) {
    const [isHidden, setIsHidden] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsHidden(true);
        }, 1500);

        const closeTimer = setTimeout(onClose, 2000);
        return () => {
            clearTimeout(timer);
            clearTimeout(closeTimer);
        };
    }, [onClose]);
    
    return (
        <div className={`${styles.popup} ${isHidden ? styles.hidden : ''}`}>
            <p>Product successfully added to your shopping cart!</p>
        </div>
    );
}