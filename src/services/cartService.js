import axios from 'axios';

const API_URL = 'http://localhost:5000/api/cart';



export const addToCart = async (productId, quantity) => {
  try {
    const response = await axios.post(
      `${API_URL}/add`,
      { productId, quantity },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};


export const getCart = async () => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('User not authenticated');
    
    const response = await axios.get(`${API_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Pass the token for authentication
      },
    });
    return response.data; // Ensure your API returns the cart data here
  };


export const updateCart = async (productId, quantity) => {
  try {
    const response = await axios.put(
      `${API_URL}/update`,
      { productId, quantity },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating cart:", error);
    throw error;
  }
};



export const removeFromCart = async (productId) => {
  try {
    const response = await axios.delete(`${API_URL}/remove/${productId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
  } catch (error) {
    console.error("Error removing from cart:", error);
    throw error;
  }
};




export const clearCart = async () => {
  try {
    const response = await axios.delete(`${API_URL}/clear`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
  } catch (error) {
    console.error("Error clearing cart:", error);
    throw error;
  }
};


export const checkout = async (shippingAddress, paymentMethod) => {
    const token = localStorage.getItem('token');
  
    const response = await fetch(`${API_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ shippingAddress, paymentMethod }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error during checkout:', errorData.message);
      return;
    }
  
    const order = await response.json();
    return order;
  };
  
