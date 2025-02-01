'use client'
import { createContext } from "react";

export const OpenNavbarContext = createContext({
  open: false,
  setOpen: function(navbar){
    return navbar;
  }
})
