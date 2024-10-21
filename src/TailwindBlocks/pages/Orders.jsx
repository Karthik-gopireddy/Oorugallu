// import { useState,useEffect } from "react";


// const OrdersPage = () => {
//   const [previousOrders, setPreviousOrders] = useState([]);

//   useEffect(() => {
//     try {
//       const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
//       if (Array.isArray(storedOrders)) {
//         setPreviousOrders(storedOrders);
//       } else {
//         // If the stored data is not an array, set it to an empty array
//         setPreviousOrders([]);
//       }
//     } catch (error) {
//       console.error('Error parsing orders from localStorage:', error);
//       // If parsing fails, set it to an empty array
//       setPreviousOrders([]);
//     }
//   }, []);

//   const baseURL = "http://localhost:4000/uploads/"; // Replace with your actual server base URL

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-background text-primary-foreground">
//       <h1 className="text-3xl font-bold mb-8">Your Previous Orders</h1>
//       {previousOrders.length === 0 ? (
//         <p>No previous orders found.</p>
//       ) : (
//         <div className="w-full max-w-2xl">
//           {previousOrders.map((order, index) => (
//             <div key={index} className="mb-8 p-4 bg-white shadow rounded">
//               <h2 className="text-xl font-bold mb-4">Order #{index + 1}</h2>
//               <p className="text-sm">Placed on: {order.date}</p>
//               <p className="text-sm">Name: {order.fullName}</p>
//               <p className="text-sm">Address: {order.address}, {order.city}, {order.state}, {order.pinCode}</p>
//               <p className="text-sm">Email: {order.email}</p>
//               <p className="text-sm">Mobile: {order.mobile}</p>
//               <div className="mt-4">
//                 <h3 className="text-lg font-bold mb-2">Ordered Items</h3>
//                 {order.products.map((item, idx) => (
//                   <div key={idx} className="flex items-center justify-between mb-2">
//                     {/* Prepending base URL to image path */}
//                     <img 
//                       src={`${baseURL}${item.image}`} 
//                       alt={item.productName} 
//                       className="w-20 h-20 object-cover rounded mr-4"
//                       onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'; }} // Fallback image
//                     />
//                     <div className="flex-1">
//                       <h2 className="font-bold">{item.productName}</h2>
//                       <p className="text-sm">Price: ${item.price.toFixed(2)}</p>
//                       <p className="text-sm">Quantity: {item.quantity}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="text-lg font-bold mt-4">Total: ${order.totalAmount}</div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrdersPage;
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import url from "../../url"

const OrdersPage = () => {
  const [previousOrders, setPreviousOrders] = useState([]);

  useEffect(() => {
    try {
      const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
      if (Array.isArray(storedOrders)) {
        setPreviousOrders(storedOrders);
      } else {
        setPreviousOrders([]);
      }
    } catch (error) {
      console.error('Error parsing orders from localStorage:', error);
      setPreviousOrders([]);
    }
  }, []);

  const baseURL = `${url}/uploads/`;

  // Function to delete an order by index
  const handleDeleteOrder = (indexToDelete) => {
    const updatedOrders = previousOrders.filter((_, index) => index !== indexToDelete);
    setPreviousOrders(updatedOrders); // Update state
    localStorage.setItem('orders', JSON.stringify(updatedOrders)); // Update localStorage
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-primary-foreground">
      <h1 className="text-3xl font-bold mb-8">Your Previous Orders</h1>
      {previousOrders.length === 0 ? (
        <p>No previous orders found.</p>
      ) : (
        <div className="w-full max-w-2xl">
          {previousOrders.map((order, index) => (
            <div key={index} className="mb-8 p-4 bg-white shadow rounded">
              <h2 className="text-xl font-bold mb-4">Order #{index + 1}</h2>
              <p className="text-sm">Placed on: {order.date}</p>
              <p className="text-sm">Name: {order.fullName}</p>
              <p className="text-sm">Address: {order.address}, {order.city}, {order.state}, {order.pinCode}</p>
              <p className="text-sm">Email: {order.email}</p>
              <p className="text-sm">Mobile: {order.mobile}</p>
              <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">Ordered Items</h3>
                {order.products.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between mb-2">
                    <img
                      src={`${baseURL}${item.image}`}
                      alt={item.productName}
                      className="w-20 h-20 object-cover rounded mr-4"
                      onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'; }} // Fallback image
                    />
                    <div className="flex-1">
                      <h2 className="font-bold">{item.productName}</h2>
                      <p className="text-sm">Price: Rs: {item.price.toFixed(2)} /-</p>
                      <p className="text-sm">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-lg font-bold mt-4">Total: Rs: {order.totalAmount} /-</div>

              {/* Delete button */}
              <button
                onClick={() => handleDeleteOrder(index)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Delete Order
              </button>
              <Link to="/success">
              <button
                onClick={() => handleDeleteOrder(index)}
                className="mt-4 ml-2 bg-amber-300 text-black px-4 py-2 rounded hover:bg-amber-600 transition"
              >
                Contact Us
              </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
