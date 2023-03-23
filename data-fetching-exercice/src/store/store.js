import { create } from 'zustand';

const API_URL = 'http://localhost:3004'

export const usePizzaStore = create((set) => ({
    pizzas : [],
    fetchPizzas: async () => {
        const response = await fetch(`${API_URL}/pizzas`)
        const data = await response.json();
        set({ pizzas : data });

    },
    selectedPizza : {},
    setSelectedPizza : (pizza) => {
        set({ selectedPizza : pizza})
    },
    isModalVisible: false,
    toggleModal : () => {
        set(state => ({ isModalVisible : !state.isModalVisible}))
    },
    order: [],
    orderPizza : async (pizza) => {
        const order = {
            pizzaId : pizza.id,
            totalPrice : pizza.price
        }

        const response = await fetch(`${API_URL}/orders` , {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        
        if(response.status === 201) {
            set(state => ({ orders : [...state.orders , order ]}))
        }
    }
}))