import React, { useEffect } from 'react';
import './Galleria.css';

export default function Galleria() {
  useEffect(() => {
    // Inietta lo script di LightWidget in modo sicuro per React all'avvio del componente
    const script = document.createElement('script');
    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Pulizia dello script quando il componente viene rimosso
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="galleria section-padding" id="galleria">
      <div className="container">
        <span className="section-label">Recenti</span>
        <h2 className="galleria__title">Instagram</h2>
      </div>

      {/* Widget Container */}
      <div className="container galleria__widget-container">
        <iframe 
          src="//lightwidget.com/widgets/fdda7644cc3d5e399fbc8f926e01cccc.html" 
          scrolling="no" 
          allowTransparency={true} 
          className="lightwidget-widget" 
          style={{ width: '100%', border: 0, overflow: 'hidden' }}
          title="Feed Instagram Gradino 61"
        ></iframe>
      </div>
    </section>
  );
}
