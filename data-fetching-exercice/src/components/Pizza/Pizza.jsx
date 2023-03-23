import { usePizzaStore } from '../../store/store';
import styles from './Pizza.module.css';


const Pizza = ({ pizza }) => {
    const { toggleModal , setSelectedPizza } = usePizzaStore(state => state);

    const onClickHandler = () => {
        setSelectedPizza(pizza);
        toggleModal()
    }
    
    return (
        <div className={styles.container} onClick={onClickHandler}>
            <img src={pizza.picture} alt="" className={styles.picture} />

            <h3 className={styles.label}>{pizza.label}</h3>

            <strong className={styles.price}>{pizza.price} $</strong>

        </div>

    )
}

export default Pizza