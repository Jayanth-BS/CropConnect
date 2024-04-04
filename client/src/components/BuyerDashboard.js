import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import shoppingCartIcon from '../images/shopping-cart-outline-svgrepo-com.svg';
import CartPage from './cart'; // Assuming the file name is 'cart.js'
import { useParams } from 'react-router-dom';

const BuyerDashboard = () => {
  const [buyerId, setBuyerId] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [products, setProducts] = useState([]);

  const {bEmail}=useParams()
  // console.log(location.state)

  useEffect(() => {
    // Extract buyer email from the location state
    console.log("email in useeffect", bEmail)
    setBuyerEmail(bEmail);

    // Fetch the buyer ID using the buyer email
    fetchBuyerId(bEmail);
    
    fetchProducts();
  }, []);

  // Console log the buyer ID and email
  
  

  const fetchBuyerId = async (email) => {
    console.log("email in dashboard",email)
    try {
      const response = await axios.get(`http://localhost:5000/api/buyer-id`, {params:{email}});
      console.log("Buyer ID response:", response.data); // Log the response data
      // Access the buyer_id property from the first element of the array
      setBuyerId(response.data[0].buyer_id);
    } catch (error) {
      console.error('Error fetching buyer ID:', error);
    }
};

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = async (product) => {
    try {
      const response = await axios.post('http://localhost:5000/api/cart/add', {
        productId: product.product_id,
        quantity: product.pquantity
      });
      console.log(response.data.message);
      
      // Filter out the product from the products state array
      setProducts(prevProducts => prevProducts.filter(p => p.product_id !== product.product_id));
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const navigateTo = (path) => {
    window.location.href = path; // Use window.location.href to redirect
  };



  return (
    <div className="buyer-dashboard">
      <div className="shopping-cart-wrapper">
      <Link to={`/cart/${buyerId}`} className="shopping-cart-link">
          <img src={shoppingCartIcon} alt="Shopping Cart" className="shopping-cart-icon" />
        </Link>
      </div>
      <h1>Buyer Dashboard</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.product_id} className="product-card">
            <h3>{product.pname}</h3>
            <p><strong>Quality:</strong> {product.pquality}</p>
            <p><strong>Quantity:</strong> {product.pquantity}</p>
            <p><strong>Price:</strong> ₹{product.pprice}</p>
            <p><strong>Domain:</strong> {product.pdomain}</p>
            <p><strong>Farmer ID:</strong> {product.farmer_id}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            
          </div>
        ))}
        
      </div>
      <Link to={`/cart/${buyerId}`} className="shopping-cart-link">
          <button style={{marginTop:20}}>Go To Cart</button>
        </Link>
    </div>
  );
}

export default BuyerDashboard;
