import React from 'react'
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
const DarkNavbar = (props) => {
    // console.log(props);
    // const darkColorTheme = createMuiTheme(...theme, {

    // })

    // const darkTheme = createMuiTheme(darkColorTheme, {
    //     overrides: {
    //         MuiButton: {
    //             root: {
    //                 borderRadius: '8px'
    //             },
    //             containedSecondary: {
    //                 color: darkColorTheme.palette.primary.main,
    //                 '&:hover': {
    //                     color: darkColorTheme.palette.primary.dark
    //                 }
    //             }
    //         },
    //         MuiIconButton: {
    //             root: {
    //                 color: darkColorTheme.palette.secondary.main
    //             }
    //         }
    //     }
    // })

    // const navbarTheme = props.darkMode ? darkTheme : theme;
    return (
        <ThemeProvider theme={(theme) => createMuiTheme({
            ...theme,
            palette: {
                type: "dark",
                // primary: {
                //     main: theme.palette.secondary.main,
                // },
                // secondary: {
                //     main: theme.palette.primary.main,
                // }
            },
        })}>
            {props.children}
        </ThemeProvider>
    )
}
export default DarkNavbar;