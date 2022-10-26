import {FC, ReactNode, useEffect, useReducer, useState} from 'react'
import { useRouter } from 'next/router'
import { UiContext } from './UiContext'
import { uiReducer } from './uiReducer';
import { ThemeProvider } from '@mui/material'
import { lightTheme, darkTheme } from '../../themes'


export interface UIState {
    sidemenuOpen: boolean;
}


const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
}

interface Props {
    children: ReactNode
}


export const UiProvider: FC<Props> = ({children}) => {
    
    const {pathname} = useRouter()
    
    const [ state, dispatch ] = useReducer( uiReducer, UI_INITIAL_STATE )
    
    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' });
    }
    
    const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' })
    
    const [ modeTheme, setModeTheme ] = useState(false)
    const [ language, setLanguage ] = useState(false)
    
    const handleModeTheme = () => {
        setModeTheme(!modeTheme)
    }

    const handleLanguage = () => {
        setLanguage(!language)
    }

    return (
        <UiContext.Provider
            value={{
                pathname,
                ...state,
                modeTheme,
                language,

                // Methods
                closeSideMenu,
                openSideMenu,
                handleModeTheme,
                handleLanguage,
            }}
        >
            <ThemeProvider theme={ modeTheme ? darkTheme : lightTheme }>
                {children}
            </ThemeProvider>
        </UiContext.Provider>
    )
}