import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import './App.css';

function Header() {
  const items = useSelector((state) => state.cart.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Paradise Nursery home">
        <span className="brand-mark" aria-hidden="true">✳</span>
        <span>Paradise <em>Nursery</em></span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Plants</NavLink>
        <a href="/#about">Our story</a>
        <NavLink className="cart-nav" to="/cart">
          <span aria-hidden="true">♧</span> Cart <span className="cart-badge" aria-label={`${itemCount} ${itemCount === 1 ? 'item' : 'items'} in cart`}>{itemCount}</span>
        </NavLink>
      </nav>
    </header>
  );
}

function LandingPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-kicker"><span aria-hidden="true">✳</span> GROW A LITTLE EVERY DAY</p>
          <h1>Bring home<br />a little <em>green.</em></h1>
          <p className="hero-description">Thoughtful plants and friendly guidance for a home that feels a little more alive.</p>
          <Link className="button button-light" to="/products">Get Started <span aria-hidden="true">→</span></Link>
          <span className="hero-note">Good things grow here.</span>
        </div>
        <div className="hero-side-note">A plant for every space <span aria-hidden="true">·</span> A little joy in every leaf</div>
      </section>
      <section className="home-collection">
        <div>
          <p className="eyebrow">A greener kind of everyday</p>
          <h2>Find the plant that<br />feels like <em>you.</em></h2>
        </div>
        <p>Whether you’re a first-time plant parent or adding to your indoor jungle, explore a considered collection for every corner and every level of care.</p>
        <Link className="text-link" to="/products">Explore the collection <span aria-hidden="true">→</span></Link>
      </section>
      <AboutUs />
    </main>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<main className="not-found"><h1>We couldn’t find that page.</h1><Link className="button button-dark" to="/">Back to home</Link></main>} />
      </Routes>
      <footer className="site-footer">
        <Link className="brand footer-brand" to="/"><span className="brand-mark" aria-hidden="true">✳</span><span>Paradise <em>Nursery</em></span></Link>
        <p>Find your green. Grow at your own pace.</p>
        <span>© {new Date().getFullYear()} Paradise Nursery</span>
      </footer>
    </>
  );
}
