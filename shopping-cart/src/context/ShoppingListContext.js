import { createContext, useReducer } from "react";
import { shoppingListInitialState, shoppingListReducer } from "./reducer";

export const ShoppingListContext = createContext();

const ShoppingListProvider = ({children}) => {
    const [state , dispatch] = useReducer(shoppingListReducer , shoppingListInitialState)

    return (
        <ShoppingListContext.Provider value={{ state , dispatch }}>
            {children}
        </ShoppingListContext.Provider>
    )
}

export default ShoppingListProvider