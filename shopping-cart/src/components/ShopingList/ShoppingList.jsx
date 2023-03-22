import Form from "./components/Form/Form"
import ProductList from "./components/ProductsList/ProductList";

const ShoppingList = () => {

    return <div>
            <Form />
            
            <ProductList/>

            <ProductList isPacked />
        </div>
}

export default ShoppingList