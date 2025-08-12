import ShoppingList from "./components/ShoppingList";
import { TiShoppingCart } from "react-icons/ti";

const App = () => {
  return (
    <div className="app">
      <h1>
        Shopping List <TiShoppingCart />
      </h1>
      <ShoppingList />
    </div>
  );
};

export default App;
