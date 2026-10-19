import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice.jsx';
import { productCategories } from '../data/products.js';

function ProductImage({ src, alt }) {
  return (
    <div className="product-image-wrap">
      <img
        className="product-image"
        src={src}
        alt={alt}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.src = '/images/plant-placeholder.svg';
        }}
      />
    </div>
  );
}

export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const addedIds = new Set(items.map((item) => item.id));

  return (
    <main className="catalog-page">
      <section className="catalog-intro">
        <p className="eyebrow">Find your new favorite</p>
        <h1>Plants for every kind of home.</h1>
        <p>From leafy statement pieces to tiny sun-lovers, there’s a little green for you.</p>
      </section>
      <div className="catalog-content">
        {productCategories.map((category, categoryIndex) => (
          <section className="product-category" key={category.name} aria-labelledby={`category-${categoryIndex}`}>
            <div className="category-heading">
              <div>
                <p className="eyebrow">Collection {String(categoryIndex + 1).padStart(2, '0')}</p>
                <h2 id={`category-${categoryIndex}`}>{category.name}</h2>
              </div>
              <p>{category.intro}</p>
            </div>
            <div className="product-grid">
              {category.products.map((product) => {
                const isAdded = addedIds.has(product.id);
                return (
                  <article className="product-card" key={product.id}>
                    <ProductImage src={product.image} alt={product.alt} />
                    <div className="product-info">
                      <p className="product-category-label">{category.name}</p>
                      <h3>{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                      <div className="product-card-footer">
                        <span className="product-price">${product.price.toFixed(2)}</span>
                        <button
                          className={`button button-small ${isAdded ? 'button-added' : 'button-dark'}`}
                          type="button"
                          disabled={isAdded}
                          onClick={() => dispatch(addItem(product))}
                        >
                          {isAdded ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
