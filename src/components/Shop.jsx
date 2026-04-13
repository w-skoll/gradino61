import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Shop.css';

const InstagramIcon = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const products = [
  { id: 'p1', name: 'Sciarpa Gradino61', price: '35€', image: './sciarpa.png' },
  { id: 'p2', name: 'T-Shirt Gradino61', price: '25€', image: './tshirt.png' },
  { id: 'p3', name: 'Cappellino', price: '20€', image: './cappellino.png' },
];

function ProductCard({ product, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const igUrl = `https://instagram.com/gradino61`;

  return (
    <motion.article
      ref={ref}
      className="shop-card"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    >
      <div className="shop-card__image-wrap">
        <img src={product.image} alt={product.name} className={`shop-card__img ${product.id === 'p1' ? 'shop-card__img--sciarpa' : ''}`} />
      </div>
      <div className="shop-card__content">
        <h3 className="shop-card__name">{product.name}</h3>
        <p className="shop-card__price">{product.price}</p>
        <a href={igUrl} target="_blank" rel="noopener noreferrer" className="btn-primary shop-card__btn">
          <InstagramIcon size={16} /> Ordina su IG
        </a>
      </div>
    </motion.article>
  );
}

export default function Shop() {
  return (
    <section className="shop section-padding" id="shop">
      <div className="container">
        <div className="shop__header">
          <span className="section-label">Shop</span>
          <h2 className="shop__title">Materiale</h2>
          <p className="shop__note">
            Per ordinare scrivici su Instagram — niente checkout, niente complicazioni.
          </p>
        </div>
        <div className="shop__grid">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
