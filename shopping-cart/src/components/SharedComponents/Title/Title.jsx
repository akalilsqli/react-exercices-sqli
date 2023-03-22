import styles from './Title.module.css';

const Title = ({title}) => {
    return <h3 className={styles.title}>{title}</h3>
}

export default Title;