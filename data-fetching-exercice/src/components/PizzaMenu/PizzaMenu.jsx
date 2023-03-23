import { useEffect, useState } from 'react';
import { usePizzaStore } from '../../store/store';
import Modal from '../Modal/Modal';
import Pizza from '../Pizza/Pizza';
import styles  from './PizzaMenu.module.css'

const PizzaMenu = ( ) => {
    // const [pizzas , setPizzas ] = useState([]);
    const { pizzas , fetchPizzas , selectedPizza , orderPizza } = usePizzaStore(state => state);

    useEffect(() => {
        fetchPizzas();
    },[]);

    return (
        <>
        <div className={styles.container}>
            {pizzas.map(pizza => <Pizza pizza={pizza} />)}
        </div>

        <Modal title={"order now !"}>
        <img src={selectedPizza.picture} alt="" className={styles.picture} />

            <h3 className={styles.label}>{selectedPizza.label}</h3>

            <strong className={styles.price}>{selectedPizza.price} $</strong>
            <button onClick={() => orderPizza(selectedPizza)}>Order now </button>
        <br />
        </Modal>
        </>
    )

}

export default PizzaMenu;