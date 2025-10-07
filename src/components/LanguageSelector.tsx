import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../i18n/config';

export default function LanguageSelector() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="language-selector">
      <button
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('language.select')}
      >
        <span className="flag">{currentLanguage.flag}</span>
        <span className="language-name">{currentLanguage.name}</span>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <>
          <div className="backdrop" onClick={() => setIsOpen(false)} />
          <div className="language-dropdown">
            <div className="dropdown-header">
              {t('language.select')}
            </div>
            <div className="language-list">
              {languages.map((language) => (
                <button
                  key={language.code}
                  className={`language-item ${i18n.language === language.code ? 'active' : ''}`}
                  onClick={() => changeLanguage(language.code)}
                >
                  <span className="flag">{language.flag}</span>
                  <span className="language-name">{language.name}</span>
                  {i18n.language === language.code && (
                    <span className="check">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
