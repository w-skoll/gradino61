import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__inner">
        <motion.div
          className="hero__logo-wrap"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <img src="./logo_principale_b.png" alt="Gradino61" className="hero__logo" />
        </motion.div>

        <motion.div
          className="hero__meta"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
        >
          <p className="hero__location">Curva Sud &middot;a Sinistra del Tabellone</p>
          <p className="hero__date">EST. 22 Gennaio 2017</p>
        </motion.div>
      </div>
    </section>
  );
}
