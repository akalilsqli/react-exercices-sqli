import { useState } from 'react';
import Button from '../../../SharedComponents/Button/Button';
import TextBox from '../../../SharedComponents/TextBox/TextBox';
import Title from '../../../SharedComponents/Title/Title';
import Product from './components/Product/Product';
import styles from './ProductList.module.css';

const ProductList = ({
    isPacked = false, 
    productsList,
    setProducts
}) => {
    const [search , setSearch] = useState("");

    const title = isPacked ? "Packed" : "Unpacked";

    const toggleIsChecked = (product) => () => {
        const newProduct = {...product ,isPacked : !product.isPacked }
        setProducts(prevProducts => ([...prevProducts.filter(prevProduct => prevProduct.id !== product.id) , newProduct ]))
    }


    const removeProduct = (id) => () => {
        setProducts(prevProducts => prevProducts.filter(prevProduct => prevProduct.id !== id ))
    }

    const unpackAllItems = () => {
        setProducts(prevProducts => prevProducts.map(
            product => ({ ...product , isPacked : false})
        ))
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