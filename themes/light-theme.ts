import { createTheme, InputLabel } from "@mui/material";
import { blueGrey, red } from "@mui/material/colors";

export const lightTheme = createTheme({
    // components: {
    //     MuiTextField: {
    //         styleOverrides: {
    //             root: InputLabel
    //         }
    //     },
    // },
    palette: {
        mode: 'light',
        // common: {
        //     black: red[800],
        //     white: blueGrey[900],   
        // },
        primary: {
            main: blueGrey[900],
            light: blueGrey['A100'],
        },
        secondary: {
            main: red[800],
        },
        // grey: {
        //     800: '#fff'
        // },
        // tonalOffset: 0.2,
        text: {
            primary: blueGrey[50],
            secondary: blueGrey[50], 
            // primary: blueGrey[900],
            // secondary: blueGrey[900], 
            disabled: blueGrey[900],
        },
        // divider: red[800],
        background: {
            paper: blueGrey['A100'],
            default: blueGrey[50],
        },
        // action: {
        //     active: blueGrey[50],
        //     selected: blueGrey[50], 
        //     selectedOpacity: 1,
        //     disabled: blueGrey[50], 
        //     disabledOpacity: 1, 
        //     focus: blueGrey[50],
        //     focusOpacity: 1,
        //     activatedOpacity: 1,
        // },
    }
})