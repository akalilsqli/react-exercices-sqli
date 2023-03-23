import { usePizzaStore } from '../../store/store';
import styles from './Modal.module.css';

const Modal = ({ title , children }) => {
    const { isModalVisible , toggleModal } = usePizzaStore(state => state);

    if(!isModalVisible) return null;

    return (<div className={styles.container}>
        <div className={styles.overlay} onClick={toggleModal} />
        <div className={styles.modal}>
            <div className={styles.header}>
                <h2>{title}</h2>

                <button className={styles.close} onClick={toggleModal}>
                    X
                </button>
            </div>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    </div>)
}

export default Modal;