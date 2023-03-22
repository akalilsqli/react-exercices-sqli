import { useContext } from 'react';
import { shoppingListActions } from '../../../../../../context/actions';
import { ShoppingListContext } from '../../../../../../context/ShoppingListContext';
import styles from './Product.module.css'

const Product = ({ product }) => {
    const { dispatch } = useContext(ShoppingListContext);

    const { id, isPacked , name , price } = product;

    const toggleIsChecked = () => {
        dispatch({ type : shoppingListActions.TOGGLE , payload : product})
    }


    const removeProduct = () => {
        dispatch({ type : shoppingListActions.REMOVE , payload : id})
    }

    return (
        <div className={styles.container}>
            <input onClick={toggleIsChecked} type="checkbox" checked={isPacked} />

            <strong>{name}</strong>

            <strong>{price} $</strong>

            <button onClick={removeProduct}>X</button>
        </div>
    )
}

export default Product