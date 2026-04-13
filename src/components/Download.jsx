import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Download.css';

const downloads = Array.from({ length: 16 }, (_, i) => ({
  id: `dl${i + 1}`,
  name: `Documento ${i + 1}`,
  img: `/download/file-${i + 1}.png`,
  file: `/download/file-${i + 1}.pdf`
}));

function DownloadCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.article
      ref={ref}
      className="download-card"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    >
      <div className="download-card__preview">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="download-card__content">
        <h3 className="download-card__name">{item.name}</h3>
        <a href={item.file} download className="btn-primary download-card__btn">
          ⬇ SCARICA
        </a>
      </div>
    </motion.article>
  );
}

export default function Download() {
  return (
    <section className="download section-padding" id="download">
      <div className="container">
        <div className="download__header">
          <span className="section-label">Materiale</span>
          <h2 className="download__title">Download</h2>
          <p className="download__note">
            Scarica liberamente i nostri loghi e la bandiera.
          </p>
        </div>
        <div className="download__grid">
          {downloads.map((dl, i) => (
            <DownloadCard key={dl.id} item={dl} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
