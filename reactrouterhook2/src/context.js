import React, { createContext } from "react";

export const themes={
    light: {
        foreground: "#000000",
        background:"#eeeeee"
    },
    dark:{
         foreground: "#ffffff",
        background:"#222222"
    }

};


const themesContext= React-createContext(themes.light)
export default themesContext;