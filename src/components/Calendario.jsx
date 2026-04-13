import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Calendario.css';
import matchesData from '../data/calendario.json';

function MatchRow({ match, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const isOdd = index % 2 === 1;
  return (
    <motion.div
      ref={ref}
      className={`match-row${isOdd ? ' match-row--alt' : ''}`}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
    >
      <span className="match-date">{match.date}</span>
      <span className={`match-badge match-badge--${match.type.toLowerCase()}`}>
        {match.type}
      </span>
      <span className="match-avversario">{match.avversario}</span>
      <span className="match-stadio">{match.stadio}</span>
    </motion.div>
  );
}

export default function Calendario() {
  return (
    <section className="calendario section-padding" id="calendario">
      <div className="container">
        <div className="calendario__header">
          <span className="section-label">Calendario</span>
          <h2 className="calendario__title">Prossime Partite</h2>
        </div>

        <div className="calendario__list">
          {matchesData.map((m, i) => (
            <MatchRow key={i} match={m} index={i} />
          ))}
        </div>

        <div className="calendario__footer">
          <a
            href="https://www.asroma.com/it/maschile/calendario"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Calendario completo →
          </a>
        </div>
      </div>
    </section>
  );
}
