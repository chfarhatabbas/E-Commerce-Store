import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from './cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2);

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white shadow rounded-lg p-4 mb-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: +e.target.value }))}
                  className="w-16 border rounded px-2 text-center"
                />
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center border-t pt-4">
            <p className="text-xl font-semibold">Total: ${total}</p>
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
