import { createContext } from "react";

interface ContextProps {
    pathname: string;
    sidemenuOpen: boolean;
    modeTheme: boolean;
    language: boolean;

    // Methods
    closeSideMenu: () => void;
    openSideMenu: () => void;
    handleModeTheme: () => void;
    handleLanguage: () => void;
}

export const UiContext = createContext({} as ContextProps)