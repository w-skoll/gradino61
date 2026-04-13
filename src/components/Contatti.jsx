import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Contatti.css';

const InstagramIcon = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const contacts = [
  { icon: InstagramIcon, platform: 'Instagram', handle: '@gradino61', href: 'https://instagram.com/gradino61' },
];

export default function Contatti() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section className="contatti section-padding" id="contatti" ref={ref}>
      <div className="container contatti__inner">
        <span className="section-label">Contatti</span>
        <h2 className="contatti__title">Dove Trovarci</h2>

        <div className="contatti__list">
          {contacts.map((c, i) => (
            <motion.a
              key={c.platform}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contatti__item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            >
              <c.icon size={28} className="contatti__icon" />
              <div className="contatti__info">
                <span className="contatti__platform">{c.platform}</span>
                <span className="contatti__handle">{c.handle}</span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          className="contatti__note"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Per il materiale, per le trasferte, per qualsiasi cosa: scrivici su Instagram.
        </motion.p>
      </div>
    </section>
  );
}
