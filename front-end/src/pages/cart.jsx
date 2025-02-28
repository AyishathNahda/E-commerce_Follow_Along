import React, { useState, useEffect } from 'react';
import CartProduct from '../components/auth/CartProduct';
import Nav from '../components/auth/nav';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Cart = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    fetch(`http://localhost:8000/api/v2/product/cartproducts?email=AYISHATH@gmail.com`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // ✅ Ensure the response has expected data
        if (!data || !Array.isArray(data.cart)) {
          console.error("Invalid cart data received:", data);
          return;
        }

        // ✅ Map valid product data while ensuring required fields exist
        const formattedProducts = data.cart
          .map((product) => {
            if (!product.productId) {
              console.error("Missing productId for product:", product);
              return null; // Skip invalid entries
            }
            return {
              _id: product.productId._id || "",
              name: product.productId.name || "Unknown Product",
              images: Array.isArray(product.productId.images) ? product.productId.images : [],
              price: product.productId.price || 0,
              quantity: product.quantity || 1,
            };
          })
          .filter(Boolean); // Remove null values

        setProducts(formattedProducts);
        console.log("Products fetched:", formattedProducts);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  console.log("Products state:", products); // Debugging log

  const handlePlaceOrder = () => {
    navigate('/select-address'); // Navigate to the Select Address page
  };

  return (
    <div className='w-full h-screen'>
      <Nav />
      <div className='w-full h-full justify-center items-center flex'>
        <div className='w-full md:w-4/5 lg:w-4/6 2xl:w-2/3 h-full border-l border-r border-neutral-300 flex flex-col'>
          <div className='w-full h-16 flex items-center justify-center'>
            <h1 className='text-2xl font-semibold'>Cart</h1>
          </div>
          <div className='w-full flex-grow overflow-auto px-3 py-2 gap-y-2'>
            {products.length > 0 ? (
              products.map((product) => <CartProduct key={product._id} {...product} />)
            ) : (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            )}
          </div>
          {/* Place Order Button */}
          {products.length > 0 && (
            <div className='w-full p-4 flex justify-end'>
              <button
                onClick={handlePlaceOrder}
                className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600'
              >
                Place Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
