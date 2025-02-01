'use client';
import { createContext } from "react";

export const LanguageContext = createContext({
  language: 'sv',
  setLanguage: function (lang) {
    return lang;
  }
})
