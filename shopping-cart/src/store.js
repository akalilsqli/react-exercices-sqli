import { create } from 'zustand';

const INITIAL_PRODUCTS = [
    { id: 1, name: "Product 1 ", price: 25, isPacked: true },
    { id: 2, name: "Product 2 ", price: 10, isPacked: false },
    { id: 3, name: "Product 3 ", price: 25, isPacked: true },
    { id: 4, name: "Product 4 ", price: 25, isPacked: false }
];

export const useShoppingListStore = create((set) => ({
    products : INITIAL_PRODUCTS,
    add : (product) => set( state => ({ products : [...state.products , product ] }) ),
    toggle: (product) => { 
        const newProduct = {...product ,isPacked : !product.isPacked }
        set(state => ({ products : [...state.products.filter(prevProduct => prevProduct.id !== product.id) , newProduct ]}))
    },
    remove : (id) => {
        set(state => ({ 
            products : state.products.filter(prevProduct => prevProduct.id !== id ) 
        }))
    },
    toggleAll : (isPacked) => {
        set(state => ({ products : state.products.map(
            product => ({ ...product , isPacked : !isPacked})
        ) }) )
    }
}))
