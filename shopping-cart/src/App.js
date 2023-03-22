import './App.css';
import ShoppingList from './components/ShopingList/ShoppingList';
import ShoppingListProvider from './context/ShoppingListContext';


function App() {
  return (
    <div className="App">
      <ShoppingListProvider>
       <ShoppingList />
      </ShoppingListProvider>
    </div>
  );
}

export default App;
