
import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';  // Import CartContext
import Swal from 'sweetalert2';  // Import SweetAlert2
import url from "../../url"

// Styling classes
const cardClasses = 'bg-card p-4 rounded-lg shadow-lg w-[300px]';
const buttonClasses = 'text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg mt-2 border-blue-300';

const IceCreamCard = ({ _id, productName, image, description, price }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ name: productName, image, price, _id });
    Swal.fire({
      title: 'Added to Cart!',
      text: `${productName} has been added to your cart.`,
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#3085d6',
      timer: 1500,
      showConfirmButton: false,
    });
  };

  // Construct full image URL
  const imageUrl = `${url}/uploads/${image}`;

  return (
    <div className={cardClasses}>
      <img
        src={imageUrl}
        alt={productName}
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'; }} // Fallback image
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-bold mb-2">{productName}</h2>
      <p className="text-sm text-zinc-500 mb-4">{description}</p>
      <span className="text-primary font-bold">Rs: {price.toFixed(2)} /-</span>
      <button onClick={handleAddToCart} className={buttonClasses + ' bg-blue-500 text-[#ffffff] ml-[100px] hover:text-black hover:bg-yellow-300'}>
        Add to Cart
      </button>
    </div>
  );
};

const IceCreamMenu = () => {
  const [iceCreamData, setIceCreamData] = useState([]);  // State for ice cream data
  const [loading, setLoading] = useState(true);  // State for loading status
  const [error, setError] = useState(null);  // State for error handling

  useEffect(() => {
    const fetchIceCreamData = async () => {
      try {
        const response = await fetch(`${url}/product/get-products`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setIceCreamData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIceCreamData();
  }, []); 

  // Inline styles for the loading spinner
  const spinnerStyle = {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderLeftColor: '#007bff', // Adjust color as needed
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 1s ease-in-out infinite',
    margin: '20px auto', // Center the spinner
  };

  const loadingContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Full viewport height
    backgroundColor: '#f8f9fa', // Background color
    color: '#212529', // Text color
  };

  // Keyframes for spinner animation
  const spinAnimation = `
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `;

  if (loading) {
    return (
      <div style={loadingContainerStyle}>
        <style>{spinAnimation}</style> {/* Include keyframes for animation */}
        <div style={spinnerStyle}></div> {/* Loading spinner */}
        <p className="text-lg">Loading Ice Cream Menu...</p> {/* Optional loading text */}
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;  // Error state
  }

  return (
    <div className="bg-background text-primary-foreground min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mt-4 mb-8">Our Delicious Ice Cream Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {iceCreamData.map((iceCream, index) => (
          <IceCreamCard key={index} {...iceCream} />
        ))}
      </div>
    </div>
  );
};

export default IceCreamMenu;
