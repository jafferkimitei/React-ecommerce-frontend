import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';
const BASE_IMAGE_URL = 'http://localhost:5000'; // Base URL for images

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    const products = response.data.map(product => ({
      ...product,
      imageUrl: `${BASE_IMAGE_URL}${product.imageUrl}`, // Ensure full image URL
    }));
    console.log('Fetched products:', products);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    alert('There was an error fetching products. Please try again later.');
    return [];
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    const product = response.data;

    // Add full image URL to the product object
    const productWithFullImageUrl = {
      ...product,
      imageUrl: `${BASE_IMAGE_URL}${product.imageUrl}`,
    };

    console.log('Fetched product:', productWithFullImageUrl);
    return productWithFullImageUrl;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const fetchFeaturedProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}?featured=true`);
      const featuredProducts = response.data.map(product => ({
        ...product,
        imageUrl: `${BASE_IMAGE_URL}${product.imageUrl}`, 
      }));
      console.log('Fetched featured products:', featuredProducts);
      return featuredProducts;
    } catch (error) {
      console.error('Error fetching featured products:', error);
      alert('There was an error fetching featured products. Please try again later.');
      return [];
    }
  };
  
