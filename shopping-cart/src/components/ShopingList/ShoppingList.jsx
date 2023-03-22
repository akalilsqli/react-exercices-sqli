import { useState } from "react";
import Form from "./components/Form/Form"
import ProductList from "./components/ProductsList/ProductList";

const INITIAL_PRODUCTS = [
    { id: 1, name: "Product 1 ", price: 25, isPacked: true },
    { id: 2, name: "Product 2 ", price: 10, isPacked: false },
    { id: 3, name: "Product 3 ", price: 25, isPacked: true },
    { id: 4, name: "Product 4 ", price: 25, isPacked: false }
];

const ShoppingList = () => {
    const [products , setProducts] = useState(INITIAL_PRODUCTS);

    return <div>
        <Form setProducts={setProducts}/>
        
        <ProductList setProducts={setProducts} productsList={products}/>

        <ProductList setProducts={setProducts} isPacked productsList={products}/>

        </div>
}

export default ShoppingList