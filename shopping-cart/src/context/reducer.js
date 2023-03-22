import { shoppingListActions } from "./actions";

export const shoppingListInitialState = [
    { id: 1, name: "Product 1 ", price: 25, isPacked: true },
    { id: 2, name: "Product 2 ", price: 10, isPacked: false },
    { id: 3, name: "Product 3 ", price: 25, isPacked: true },
    { id: 4, name: "Product 4 ", price: 25, isPacked: false }
];


export const shoppingListReducer = (state , action) => {
    switch(action.type) {
        case shoppingListActions.ADD :
            return [...state , action.payload ];
        case shoppingListActions.REMOVE :
            return state.filter(prevProduct => prevProduct.id !== action.payload );
        case shoppingListActions.TOGGLE :
            const newProduct = {...action.payload ,isPacked : !action.payload.isPacked }
            return [...state.filter(prevProduct => prevProduct.id !== action.payload.id) , newProduct ]
        case shoppingListActions.TOGGLE_ALL :
            return state.map(
                product => ({ ...product , isPacked : !action.payload})
            );
        default : 
            return state;
    }
}