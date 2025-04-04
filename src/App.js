import {useState} from 'react'
import CartList from "./components/CartList";
import CartSummary from "./components/CartSummary";
import Products from "./components/Products";

const PRODUCTS = [
  {id: 1, name: "Laptop", price: 500},
  {id: 2, name: "Smartphone", price: 300},
  {id: 3, name: "Headphones", price: 100},
  {id: 4, name: "Smartwatch", price: 150},
]

const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };
const THRESHOLD = 1000;


function App() {
  const [cartList, setCartList] = useState([]);
  const [quantities, setQuantites] = useState({})
  
  const addToCart = (product) => {
    const existingProduct = cartList.find((item) => item.id === product.id)
    const quantity = quantities[product.id] || 1
    if (existingProduct) {
      const updatedCartList = cartList.map((item) =>
      item.id === product.id ? {...item, quantity: item.quantity + quantity} : item)
      setCartList(updatedCartList)
    }
    else {
      const newProduct = {...product, quantity}
      setCartList([...cartList, newProduct])
  } 
  }
  
  const handleQuantityChange = (productId, count) => {
    setCartList((cart) => cart.map((item) => item.id === productId ? 
    {...item, quantity: Math.max(item.quantity + count, 1)} : item))
  }

  const subTotal = cartList.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const progress = Math.min((subTotal / THRESHOLD) * 100, 100)

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-center font-bold text-5xl">Shopping Cart</h1>
      <Products products={PRODUCTS} addToCart={addToCart}/>
      <CartSummary subTotal={subTotal} progress={progress}/>
      <CartList FREE_GIFT={FREE_GIFT}  cartList={cartList} handleQuantityChange={handleQuantityChange} subTotal={subTotal}/>
    </div>
  );
}

export default App;
