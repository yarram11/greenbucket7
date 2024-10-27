const CartPopup = ({ closeCartPopup }) => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Debugging: Log cartItems to see its structure
  console.log("Cart Items:", cartItems);

  // Calculate the total price and quantity
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = item.price || 0;
    const quantity = item.quantity || 0;
    return acc + price * quantity;
  }, 0);

  const totalQuantity = cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0);

  return (
    <div className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 flex justify-end items-start animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mt-16 mr-4 relative">
        <button
          onClick={closeCartPopup}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
          aria-label="Close Cart"
        >
          <BiX className="text-2xl" />
        </button>

        <h2 className="text-xl font-semibold mb-4">Your Cart ({totalQuantity} items)</h2>

        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty!</p>
        ) : (
          <div className="cart-items-container">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                <Image
                  src={item.imageSrc || '/fallback.jpg'} // Fallback image path
                  alt={item.altText}
                  width={50}
                  height={50}
                  className="rounded-md mr-3"
                  onError={(e) => {
                    e.currentTarget.src = '/fallback.jpg'; // Set fallback on error
                  }}
                />
                <div className="flex-grow">
                  <h3 className="text-lg">{item.soupName}</h3>
                  <p className="text-gray-500">₹{item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => increaseQuantity(item.soupName)}
                    className="text-lg px-2 py-1 bg-gray-200 rounded-md"
                    aria-label={`Increase quantity of ${item.soupName}`}
                  >
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => decreaseQuantity(item.soupName)}
                    className="text-lg px-2 py-1 bg-gray-200 rounded-md"
                    aria-label={`Decrease quantity of ${item.soupName}`}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between mt-6">
          <h4 className="text-lg font-bold">Total:</h4>
          <p className="text-lg font-semibold">₹{totalPrice.toFixed(2)}</p>
        </div>

        <button 
          onClick={() => setIsCheckoutOpen(true)}
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-500 transition"
        >
          Order Now
        </button>

        {isCheckoutOpen && (
          <CheckoutPopup 
            closeCheckoutPopup={() => setIsCheckoutOpen(false)} 
            cartItems={cartItems} 
          />
        )}
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default CartPopup;
