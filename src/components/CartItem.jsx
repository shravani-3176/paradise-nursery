import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice.jsx';

const money = (amount) => `$${amount.toFixed(2)}`;

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (items.length === 0) {
    return (
      <main className="cart-page">
        <div className="cart-title">
          <p className="eyebrow">Your basket</p>
          <h1>Shopping cart</h1>
        </div>
        <section className="empty-cart">
          <span className="empty-cart-icon" aria-hidden="true">♡</span>
          <h2>Your cart is ready to grow.</h2>
          <p>Take a look around and find a plant that feels right for your space.</p>
          <Link className="button button-dark" to="/products">Continue Shopping</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-title">
        <p className="eyebrow">Your basket · {itemCount} {itemCount === 1 ? 'item' : 'items'}</p>
        <h1>Shopping cart</h1>
      </div>
      {checkoutComplete && (
        <div className="demo-notice" role="status">
          Thanks for exploring Paradise Nursery! Checkout is a demo; no payment has been taken.
        </div>
      )}
      <div className="cart-layout">
        <section className="cart-lines" aria-label="Cart items">
          {items.map((item) => (
            <article className="cart-line" key={item.id}>
              <img
                className="cart-product-image"
                src={item.image}
                alt={item.alt || item.name}
                onError={(event) => {
                  event.currentTarget.src = '/images/plant-placeholder.svg';
                }}
              />
              <div className="cart-product-details">
                <p className="product-category-label">{item.category || 'Plant'}</p>
                <h2>{item.name}</h2>
                <p className="cart-unit-price">{money(item.price)} each</p>
                <button className="remove-button" type="button" onClick={() => dispatch(removeItem(item.id))}>
                  Remove
                </button>
              </div>
              <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                <button
                  type="button"
                  aria-label={`Decrease ${item.name} quantity`}
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                >−</button>
                <span aria-live="polite">{item.quantity}</span>
                <button
                  type="button"
                  aria-label={`Increase ${item.name} quantity`}
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                >+</button>
              </div>
              <strong className="line-subtotal">{money(item.price * item.quantity)}</strong>
            </article>
          ))}
        </section>
        <aside className="order-summary">
          <h2>Order summary</h2>
          <div className="summary-row"><span>Subtotal</span><span>{money(total)}</span></div>
          <div className="summary-row"><span>Delivery</span><span>Calculated at checkout</span></div>
          <div className="summary-total"><span>Total</span><strong>{money(total)}</strong></div>
          <p className="summary-note">Taxes and delivery are not included in this demo total.</p>
          <button
            className="button button-dark checkout-button"
            type="button"
            onClick={() => setCheckoutComplete(true)}
          >
            Checkout
          </button>
        </aside>
      </div>
      <Link className="text-link continue-link" to="/products">← Continue Shopping</Link>
    </main>
  );
}
