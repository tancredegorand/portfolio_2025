import React, { createContext, useState, useContext, useEffect } from 'react';

// Créer le contexte
export const LanguageContext = createContext();

// Créer un hook personnalisé pour utiliser le contexte
export const useLanguage = () => useContext(LanguageContext);

// Provider du contexte de langue
export const LanguageProvider = ({ children }) => {
  // Récupérer la langue depuis localStorage ou utiliser 'fr' par défaut
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'fr');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fonction pour changer la langue
  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'eng' : 'fr';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  // Charger les données selon la langue
  useEffect(() => {
    setLoading(true);
    // Récupérer le fichier JSON correspondant à la langue
    import(`../data/data_${language}.json`)
      .then(importedData => {
        setData(importedData.default);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erreur lors du chargement des données:", error);
        setLoading(false);
      });
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, data, loading }}>
      {children}
    </LanguageContext.Provider>
  );
};