import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation();

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">{t('features.title')}</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>{t('features.multilingual')}</h3>
            <p>{t('features.multilingualDesc')}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>{t('features.realtime')}</h3>
            <p>{t('features.realtimeDesc')}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">♿</div>
            <h3>{t('features.accessible')}</h3>
            <p>{t('features.accessibleDesc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
