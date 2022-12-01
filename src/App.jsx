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
  const [products, setProducts] = useState({
    loading: false,
    data: [],
    error:""
  });
  
  const [cart, setCart] = useState({
    loading: false,
    data: {},
    error:""
  });
  const [checkoutToken,setCheckoutToken] = useState({
    loading: false,
    data: [],
    error:""
  })
 const [order,setOrder]= useState({
  loading: false,
  data: [],
  error:""
})
 

 
 const navigateTo = useNavigate();
 



  /**
 * Fetch products data from Chec and stores in the products data object.
 */
const fetchProducts = () => {
  setProducts(prev=>{
    return {
      ...prev,
      loading : true
    }
  });
  commerce.products.list({
    limit: 100,
  }).then((products) => {
    
    setProducts(prev=>{
      return {
        ...prev,
        data: products.data,
        loading : false
      }
    });
  }).catch((error) => {
    console.log('There was an error fetching the products', error)
    setProducts(prev=>{
      return {
        ...prev,
        data: [],
        loading : false,
        error : error
      }
    });
  }); 
}


/**
 * Retrieve the current cart or create one if one does not exist
 */
 const fetchCart = () => {
  setCart(prev=>{
    return {
      ...prev,
      loading: true
    }
  });
  commerce.cart.retrieve().then((cart) => {
    setCart(prev=>{
      return {
        ...prev,
        data: cart,
        loading : false
      }
    });
  }).catch((error) => {
    console.log('There was an error fetching the cart', error);
    setCart(prev=>{
      return {
        ...prev,
        data: {},
        loading : false,
        error:error
      }
    });
  });
}

/**
 * Refreshes to a new cart
 */
const refreshCart = () => {
  setCart(prev=>{
    return {
      ...prev,
      loading: true
    }
  })
  commerce.cart.refresh().then((newCart) => {
    
      setCart(prev=>{
        return {
          ...prev,
          data: newCart,
          loading: false
        }
      })
    
  }).catch((error) => {
    console.log('There was an error refreshing your cart', error);
    setCart(prev=>{
      return {
        ...prev,
        data: {},
        loading: false,
        error: error
      }
    })
  });
};

/**
 * Captures the checkout
 */
 const handleCaptureCheckout=(checkoutTokenId, newOrder) => {
  setOrder(prev=>{
    return {
      ...prev,
      loading: true
    }
  })
  commerce.checkout.capture(checkoutTokenId, newOrder).then((order) => {
    // Save the order into state
    setOrder(prev=>{
      return {
        ...prev,
        data:order,
        loading: false
      }
    })
    
    // Clear the cart
    refreshCart();
    
    // Send the user to the receipt 
    navigateTo('/confirmation');
    // Store the order in session storage so we can show it again if the
    // user refreshes the page!
    window.sessionStorage.setItem('order_receipt', JSON.stringify(order));   
  }
  ).catch((error) => {
    console.log('There was an error confirming your order', error);
    setOrder(prev=>{
      return {
        ...prev,
        data:[],
        loading: false,
        error: error
      }
    })
  });
};





useEffect(() => {
  fetchProducts();
  fetchCart();
}, []);

const handleAddToCart = (productId, quantity,variantData) => {
  setCart(prev=>{
    return {
      ...prev,
      loading: true
    }
  })
  commerce.cart.add(productId, quantity,variantData).then((item) => {
    setCart(prev=>{
      return {
        ...prev,
        data: item.cart,
        loading: false
      }
    })
  }).catch((error) => {
    console.error('There was an error adding the item to the cart', error);
    setCart(prev=>{
      return {
        ...prev,
        data: {},
        loading: false,
        error: error
      }
    })
  });
}

/**
 * Updates line_items in cart
 *
 */
 const handleUpdateCartQty = (lineItemId, quantity) => {
  setCart(prev=>{
    return {
      ...prev,
      loading: true
    }
  })
  commerce.cart.update(lineItemId, { quantity }).then((resp) => {
    setCart(prev=>{
      return {
        ...prev,
        data: resp.cart,
        loading: false
      }
    })
  }).catch((error) => {
    console.log('There was an error updating the cart items', error);
    setCart(prev=>{
      return {
        ...prev,
        data: {},
        loading: false,
        error:error
      }
    })
  });
}

/**
 * Removes line item from cart
 */
 const handleRemoveFromCart = (lineItemId) => {
  setCart(prev=>{
    return {
      ...prev,
      loading: true
    }
  })
  commerce.cart.remove(lineItemId).then((resp) => {
    setCart(prev=>{
      return {
        ...prev,
        data: resp.cart,
        loading: false
      }
    })
  }).catch((error) => {
    console.error('There was an error removing the item from the cart', error);
    setCart(prev=>{
      return {
        ...prev,
        data: {},
        loading: false,
        error: error
      }
    })
  });
}

/**
 * Empties cart contents
 */
 const handleEmptyCart = () => {
  setCart(prev=>{
    return {
      ...prev,
      loading: true
    }
  })
  commerce.cart.empty().then((resp) => {
    setCart(prev=>{
      return {
        ...prev,
        data: resp.cart,
        loading: false
      }
    })
  }).catch((error) => {
    console.error('There was an error emptying the cart', error);
    setCart(prev=>{
      return {
        ...prev,
        data: {},
        loading: false,
        error: error
      }
    })
  });
}

const generateToken = async () => {
  setCheckoutToken(prev=>{
    return {
      ...prev,
      loading: true
    }
  })
  try {
    const token = await commerce.checkout.generateToken(cart.data.id, { type: 'cart' });

    setCheckoutToken(prev=>{
      return {
        ...prev,
        data: token,
        loading: false
      }
    })
  } catch(error) {
    console.log('There was an error in generating a token', error);
    setCheckoutToken(prev=>{
      return {
        ...prev,
        loading: false,
        data: [],
        error : error
      }
    })
  }
};

useEffect(() => {
  if (cart.data) {

    generateToken();
  }
}, [cart.data]);

  return (
    <div className="App">
      <Header cart={cart} />
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" /> 
        <Route element={<About />} path="/about" />
        <Route element={<Confirmation order={order} />} path="/confirmation" />
        <Route element={<ProductList products={products} onAddToCart={handleAddToCart} cart={cart}  />} path="/productlist" />
        <Route element={<Checkout order={order} cart={cart} checkoutToken={checkoutToken} onCaptureCheckout={handleCaptureCheckout} />} path="/checkout" />
        <Route element={<Soup products={products} onAddToCart={handleAddToCart} cart={cart} />} path="/soup" />
        <Route element={<Drinks products={products} onAddToCart={handleAddToCart} cart={cart} />} path="/drinks" />
        <Route element={<Others products={products} onAddToCart={handleAddToCart} cart={cart} />} path="/others" />
        <Route element={<Rice products={products} onAddToCart={handleAddToCart} cart={cart} />} path="/rice" />
        <Route element={<Proteins products={products} onAddToCart={handleAddToCart} cart={cart} />} path="/proteins" />
        <Route element={<Salad products={products} onAddToCart={handleAddToCart} cart={cart} />} path="/salad" />
        <Route path="/category" element={<Category />} />
        <Route element={<Pastry products={products} onAddToCart={handleAddToCart} cart={cart} />} path="/pastry" />
        <Route element={<Pizza products={products} onAddToCart={handleAddToCart} cart={cart} />} path="/pizza" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />} path="/cart" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
