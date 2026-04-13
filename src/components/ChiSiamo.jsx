import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './ChiSiamo.css';

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function ChiSiamo() {
  return (
    <section className="chi-siamo section-padding" id="chi-siamo">
      <div className="container">
        <div className="chi-siamo__grid">
          <div className="chi-siamo__text">
            <FadeIn delay={0}>
              <span className="section-label">Chi Siamo</span>
              <h2 className="chi-siamo__title">Gradino 61</h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p>
                Il 22 gennaio 2017 un gruppo di ragazzi si è sistemato al gradino 61,
                sinistra del tabellone, Curva Sud. Da quel giorno non ci siamo spostati.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p>
                Non siamo un'associazione. Non abbiamo uno statuto, non abbiamo sponsor,
                non abbiamo un ufficio stampa. Siamo un gruppo di amici con una sola
                cosa in comune: la curva.
              </p>
            </FadeIn>
            <FadeIn delay={0.35}>
              <p>
                Chi ci conosce sa dove trovarci. Chi non ci conosce ancora,
                passa a salutarci.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="right">
            <div className="chi-siamo__image-wrap">
              <img src="/chisiamo.jpeg" alt="La curva del Gradino 61" className="chi-siamo__image" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
