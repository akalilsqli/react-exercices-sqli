import { string } from 'prop-types';
import { useState } from 'react';
import Button from '../../../SharedComponents/Button/Button';
import TextBox from '../../../SharedComponents/TextBox/TextBox';

const Form = ({
    setProducts
}) => {
    const [name , setName] = useState("");
    const [price, setPrice] = useState(0);


    const addProduct = () => {
        const product = {id : Math.random() * 100 , name , price : parseFloat(price) ,isPacked : false }; 
        setProducts(prevProducts => ([...prevProducts , product ]))
    }

    return <div>
        {/* Product Textbox */}
        <TextBox value={name} placeholder={"Product"} onChange={(e) => setName(e.target.value)} />
        {/* Price Textbox */}
        <TextBox value={price} placeholder={"0"} onChange={(e) => setPrice(e.target.value)} />
        {/* Add Button */}
        <Button text={"Add"} onClick={addProduct} />
    </div>
}

Form.propTypes = {
}

export default Form;