import React,{useContext} from "react";
import themesContext from "../context";

export default function ThemesButton(){
    const {theme, handleChangeTheme}= useContext(themesContext);

    return (
        <button
        onClick={handleChangeTheme}
        style={{background: theme.background, color: theme.foreground}}
        >
            Cambiar
        </button>
    )
}