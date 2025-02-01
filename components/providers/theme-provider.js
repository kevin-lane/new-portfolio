'use client'
import { createContext } from "react";

export const ThemeContext = createContext({
  dark: false,
  setDark: function(theme){
    return theme;
  }
})
