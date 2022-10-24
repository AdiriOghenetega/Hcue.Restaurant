import Header from "./header";
import Navbar from "./navbar";
import Category from "./category";
import Footer from "./footer";
import Checkout from "./checkout";
import Home from "./home";
import About from "./about";
import Pastry from "./pastry";
import Pizza from "./pizza";
import Contact from "./contact";
import Soup from "./soup";
import Rice from "./rice";
import Salad from "./salad";
import Drinks from "./drinks";
import Proteins from "./proteins";
import Others from "./others";
import Cart from "./cart";
import ProductList from "./productList";
import Confirmation from "./confirmation";
import { Routes, Route } from "react-router-dom";
import commerce from './lib/commerce';
import {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom"
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [checkoutToken,setCheckoutToken] = useState({})
 const [order,setOrder]= useState({})
 const navigateTo = useNavigate();
  
  /**
 * Fetch products data from Chec and stores in the products data object.
 */
const fetchProducts = () => {
  commerce.products.list({
    limit: 100,
  }).then((products) => {
    setProducts(products.data);
  }).catch((error) => {
    console.log('There was an error fetching the products', error)
  });
}
/**
 * Retrieve the current cart or create one if one does not exist
 */
 const fetchCart = () => {
  commerce.cart.retrieve().then((cart) => {
    setCart(cart);
  }).catch((error) => {
    console.log('There was an error fetching the cart', error);
  });
}

/**
 * Refreshes to a new cart
 */
const refreshCart = () => {
  commerce.cart.refresh().then((newCart) => {
    
      setCart(newCart)
    
  }).catch((error) => {
    console.log('There was an error refreshing your cart', error);
  });
};

/**
 * Captures the checkout
 */
 const handleCaptureCheckout=(checkoutTokenId, newOrder) => {
  commerce.checkout.capture(checkoutTokenId, newOrder).then((order) => {
    // Save the order into state
    setOrder(order)
    // Clear the cart
    refreshCart();
    // Send the user to the receipt 
    navigateTo('/confirmation');
    // Store the order in session storage so we can show it again if the
    // user refreshes the page!
    window.sessionStorage.setItem('order_receipt', JSON.stringify(order));   
  }).catch((error) => {
    console.log('There was an error confirming your order', error);
  });
};





useEffect(() => {
  fetchProducts();
  fetchCart();
}, []);

const handleAddToCart = (productId, quantity,variant) => {
  commerce.cart.add(productId, quantity,variant).then((item) => {
    setCart(item.cart);
  }).catch((error) => {
    console.error('There was an error adding the item to the cart', error);
  });
}

/**
 * Updates line_items in cart
 *
 */
 const handleUpdateCartQty = (lineItemId, quantity) => {
  commerce.cart.update(lineItemId, { quantity }).then((resp) => {
    setCart(resp.cart);
  }).catch((error) => {
    console.log('There was an error updating the cart items', error);
  });
}

/**
 * Removes line item from cart
 */
 const handleRemoveFromCart = (lineItemId) => {
  commerce.cart.remove(lineItemId).then((resp) => {
    setCart(resp.cart);
  }).catch((error) => {
    console.error('There was an error removing the item from the cart', error);
  });
}

/**
 * Empties cart contents
 */
 const handleEmptyCart = () => {
  commerce.cart.empty().then((resp) => {
    setCart(resp.cart);
  }).catch((error) => {
    console.error('There was an error emptying the cart', error);
  });
}

const generateToken = async () => {
  try {
    const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

    setCheckoutToken(token);
  } catch(error) {
    console.log('There was an error in generating a token', error);
  }
};

useEffect(() => {
  if (cart.id) {

    generateToken();
  }
}, [cart]);

  return (
    <div className="App">
      <Header cart={cart} />
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Confirmation order={order} />} path="/confirmation" />
        <Route element={<ProductList products={products} onAddToCart={handleAddToCart}  />} path="/productlist" />
        <Route element={<Checkout cart={cart} checkoutToken={checkoutToken} onCaptureCheckout={handleCaptureCheckout} />} path="/checkout" />
        <Route element={<Soup />} path="/soup" />
        <Route element={<Drinks />} path="/drinks" />
        <Route element={<Others />} path="/others" />
        <Route element={<Rice />} path="/rice" />
        <Route element={<Proteins />} path="/proteins" />
        <Route element={<Salad />} path="/salad" />
        <Route path="/category" element={<Category />} />
        <Route element={<Pastry />} path="/pastry" />
        <Route element={<Pizza />} path="/pizza" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />} path="/cart" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
