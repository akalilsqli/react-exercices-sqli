import { useContext, useState } from 'react';
import { shoppingListActions } from '../../../../context/actions';
import { ShoppingListContext } from '../../../../context/ShoppingListContext';
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
    const {state : productsList, dispatch } = useContext(ShoppingListContext);
    
    // grap props using our context
    const [search , setSearch] = useState("");

    const title = isPacked ? "Packed" : "Unpacked";

    const toggleAll = () => {
        dispatch({ type : shoppingListActions.TOGGLE_ALL , payload : isPacked})
    }

    return <div className={styles.container}>
        <Title title={`${title} items ${productsList.length}`} />

        <TextBox value={search} onChange={e => setSearch(e.target.value)} placeholder={`Filter inside ${title} items`}/>
        {
            productsList.filter(product => product.isPacked === isPacked)
            .filter(product => {               
                return product.name.toLowerCase().includes(search.toLowerCase())
            })          
            .map(product => <Product product={product}/>)
        
        }

        <Button text={`Mark all as ${isPacked ? 'unpacked' : 'packed'}`} onClick={toggleAll} />
    
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