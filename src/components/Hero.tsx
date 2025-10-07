import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="container">
        <h2 className="hero-title">{t('welcome.message')}</h2>
        <p className="hero-description">{t('welcome.description')}</p>
        <div className="hero-buttons">
          <button className="button primary">{t('button.getStarted')}</button>
          <button className="button secondary">{t('button.learnMore')}</button>
        </div>
      </div>
    </section>
  );
}
