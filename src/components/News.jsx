import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './News.css';

import articlesData from '../data/news.json';

const articles = articlesData;

function NewsCard({ article, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.article
      ref={ref}
      className="news-card"
      id={article.id}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
    >
      <time className="news-card__date" dateTime={article.date}>{article.date}</time>
      <h3 className="news-card__title">{article.title}</h3>
      <p className="news-card__excerpt">{article.excerpt}</p>
    </motion.article>
  );
}

export default function News() {
  return (
    <section className="news section-padding" id="news">
      <div className="container">
        <span className="section-label">News</span>
        <h2 className="news__title">Aggiornamenti</h2>
        <div className="news__grid">
          {articles.map((a, i) => (
            <NewsCard key={a.id} article={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
