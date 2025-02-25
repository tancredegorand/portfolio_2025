import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <p 
      onClick={toggleLanguage} 
      className="languageOption"
    >
      {language === 'fr' ? 'ENG' : 'FR'}
    </p>
  );
};

export default LanguageSwitcher;