import styles from './Product.module.css'

const Product = ({ product ,onCheck , removeProduct }) => {

    const { isPacked , name , price } = product;

    return (
        <div className={styles.container}>
            <input onClick={onCheck} type="checkbox" checked={isPacked} />

            <strong>{name}</strong>

            <strong>{price} $</strong>

            <button onClick={removeProduct}>X</button>
        </div>
    )
}

export default Product