import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import emptyCart from "../../images/emptyCart.jpg";
import {useNavigate} from "react-router-dom"
import url from "../../url"

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()

  // Form field states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handlePlaceOrder = () => {
    setIsModalOpen(true); // Show the modal
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const paymentsuccess = (isSuccess) => {
    if (isSuccess) {
      alert("Your Order is successfully placed");
      navigate("/success");
  
      // Save order details in local storage
      const orderDetails = {
        fullName,
        email,
        mobile,
        address,
        city,
        state,
        pinCode,
        products: cart.map(item => ({
          productId: item._id,
          productName: item.name,
          image: item.image, // Ensure the image path is correct
          price: item.price,
          quantity: item.quantity,
        })),
        totalAmount: getTotalPrice(),
        orderId: new Date().getTime(), // Use timestamp for unique order ID
        createdAt: new Date(), // Save the date the order was placed
      };
  
      // Retrieve previous orders from local storage
      const previousOrders = JSON.parse(localStorage.getItem("orders")) || [];
  
      // Ensure previousOrders is an array before pushing the new order
      const ordersArray = Array.isArray(previousOrders) ? previousOrders : [];
  
      // Add the new order to the previous orders array
      ordersArray.push(orderDetails);
  
      // Save updated orders back to local storage
      localStorage.setItem("orders", JSON.stringify(ordersArray));
  
      navigate("/success");
      // You can also clear the cart here if needed
    }
  };
  
  

  const handleAddressSubmit = async (e) => {
    e.preventDefault();

    const totalAmount = getTotalPrice(); // Get the total amount from the cart

    const rzp = new window.Razorpay({
      key: "rzp_test_B9S8hmIWzP4YGf",
      amount: (totalAmount * 100), // amount in the smallest currency unit (paise)
      currency: "INR",
      name: "Oorugallu Ruchullu.",
      description: "Test Transaction",
      // image: "24HR_LOGO_PNG.png",
      handler: async (response) => {
        if (response.error) {
          // Payment failed, handle the error here
          alert("Payment failed: " + response.error.description);
        } else {
          // Payment successful, proceed with creating the order
          const orderDetails = {
            fullName,
            email,
            mobile,
            address,
            city,
            state,
            pinCode,
            products: cart.map(item => ({
              productId: item._id,
              productName: item.name,
              image: item.image,
              price: item.price,
              quantity: item.quantity,
            })),
            totalAmount: totalAmount, // Total amount from the cart
          };

          try {
            const response = await fetch(`${url}/orders/create-order`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(orderDetails),
            });

            const data = await response.json();
            console.log(data);
            if (response.ok) {
              // alert(data.message);
              // Handle further actions here, like clearing the cart or redirecting
            } else {
              alert("Error creating order: " + data.message);
            }
          } catch (error) {
            console.error("Error:", error);
            alert("Error creating order");
          }

          paymentsuccess(true); // Indicate successful payment
        }
      },
      payment_capture: "1",
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    });

    rzp.open(); // Open the Razorpay payment modal
    setIsModalOpen(false); // Close the modal after submission
};



  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-primary-foreground">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <img className='w-[300px] h-[200px]' src={emptyCart} alt="empty" />
      ) : (
        <div className="w-full max-w-2xl">
          {cart.map((item) => (
            <div key={item.name} className="flex items-center justify-between mb-4 p-4 bg-white shadow rounded">
              <img 
                src={`${url}/uploads/${item.image}`} 
                alt={item.name} 
                className="w-20 h-20 object-cover rounded mr-4"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'; }} // Fallback image
              />
              <div className="flex-1">
                <h2 className="font-bold">{item.name}</h2>
                <p className="text-sm">Rs: {item.price.toFixed(2)} /-</p>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.name, -1)}
                    className="bg-gray-300 px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.name, 1)}
                    className="bg-gray-300 px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <span className="font-bold">Rs: {(item.price * item.quantity).toFixed(2)} /-</span>
              <button
                onClick={() => removeFromCart(item.name)}
                className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-lg font-bold mt-4">Total: Rs: {getTotalPrice()} /-</div>
          <button
            onClick={handlePlaceOrder}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Place Order
          </button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto mt-[200px]">
            <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
            <form onSubmit={handleAddressSubmit}>
              <div className="mb-4">
                <label className="block mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Mobile Number</label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Address</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">City</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">State</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Pin Code</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
