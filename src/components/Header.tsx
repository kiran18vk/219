import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>{t('app.title')}</h1>
            <p className="subtitle">{t('app.subtitle')}</p>
          </div>
          <LanguageSelector />
        </div>
        <nav className="nav">
          <a href="#home">{t('nav.home')}</a>
          <a href="#features">{t('nav.features')}</a>
          <a href="#about">{t('nav.about')}</a>
          <a href="#contact">{t('nav.contact')}</a>
        </nav>
      </div>
    </header>
  );
}
