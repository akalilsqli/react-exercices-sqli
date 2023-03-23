import { useState } from 'react';
import { useShoppingListStore } from '../../../../store';
import Button from '../../../SharedComponents/Button/Button';
import TextBox from '../../../SharedComponents/TextBox/TextBox';
import Title from '../../../SharedComponents/Title/Title';
import Product from './components/Product/Product';
import styles from './ProductList.module.css';

const ProductList = ({
    isPacked = false, 
    // productsList,
    setProducts
}) => {
    const {products : productsList , toggle , remove , toggleAll} = useShoppingListStore(state => state);
    
    const [search , setSearch] = useState("");

    const title = isPacked ? "Packed" : "Unpacked";

    const toggleIsChecked = (product) => () => {
        toggle(product)
    }


    const removeProduct = (id) => () => {
        remove(id)
    }

    const unpackAllItems = () => {
        toggleAll(isPacked)

    }

    return <div className={styles.container}>
        <Title title={`${title} items ${productsList.length}`} />

        <TextBox value={search} onChange={e => setSearch(e.target.value)} placeholder={`Filter inside ${title} items`}/>
        {
            productsList.filter(product => product.isPacked === isPacked)
            .filter(product => {               
                return product.name.toLowerCase().includes(search.toLowerCase())
            })          
            .map(product => <Product removeProduct={removeProduct(product.id)} onCheck={toggleIsChecked(product)} product={product}/>)
        
        }

        <Button text={"Mark all as unpacked"} onClick={unpackAllItems} />
    
        <div><span>
            Total : {
                productsList.filter(product => product.isPacked)
                            .reduce((acc , currentProduct) => 
                                acc += currentProduct.price
                             , 0)
            } $
            </span></div>
    </div>
}

export default ProductList;