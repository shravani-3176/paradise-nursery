import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-copy">
        <p className="eyebrow">A little more green, a little more you</p>
        <h2>Plants make a place feel like home.</h2>
        <p>
          Paradise Nursery is a plant shop for everyday spaces and curious growers. Explore
          indoor plants, air-purifying favorites, and succulents, with thoughtful guidance
          to help you find a plant that fits your light, routine, and home.
        </p>
        <Link className="text-link" to="/products">Get to know our plants <span aria-hidden="true">→</span></Link>
      </div>
      <div className="about-details">
        <article>
          <span className="about-number">01</span>
          <h3>Our mission</h3>
          <p>Make the joy of growing something green welcoming, simple, and accessible.</p>
        </article>
        <article>
          <span className="about-number">02</span>
          <h3>Here to help</h3>
          <p>Browse useful care notes and choose a plant to suit your space and experience.</p>
        </article>
        <article>
          <span className="about-number">03</span>
          <h3>Thoughtful picks</h3>
          <p>Find a considered selection of leafy companions, from easygoing to distinctive.</p>
        </article>
      </div>
    </section>
  );
}
