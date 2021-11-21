import Products from './components/Products';
import './App.css';
import Cart from './components/Cart';

function App() {
  return (
    <div className="container">
      <Cart />
      <Products />
    </div>
  );
}

export default App;
