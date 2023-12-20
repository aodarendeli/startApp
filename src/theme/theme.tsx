import { PaletteMode, colors } from "@mui/material";
import { amber, grey } from "@mui/material/colors";

const theme = {
  palette: {
    primary: amber,
  },
};


export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
        // palette values for light mode
        primary: colors.grey,
        divider: grey[200],
        text: {
          primary: grey[600],
          secondary: grey[600],
        },
      }
      : {
        // palette values for dark mode
        // primary: deepOrange,
        // divider: deepOrange[700],
        // background: {
        //   default: deepOrange[900],
        //   paper: deepOrange[900],
        // },
        // text: {
        //   primary: "#fff",
        //   secondary: grey[500],
        // },
      }),
  },
});
export const getThemedComponents = (mode: PaletteMode) => ({
  mode,
  components: {
    ...(mode === 'light'
      ? {
        // MuiPaper: {
        //   styleOverrides: {
        //     colorPrimary: {
        //       backgroundColor: 300,
        //     },
        //   },
        // },
        // Footer: {
        //   colorPrimary: {
        //     backgroundColor: blue[800],
        //   },
        // },
        // MuiLink: {
        //   variant: 'h3',
        // },
        // MuiButton: {
        //   styleOverrides: {
        //     root: {
        //       borderRadius: 0,
        //       color: amber,
        //       fontFamily:
        //         "Oswald, Roboto, 'Helvetica Neue', Arial, sans-serif",
        //       fontSize: 20,
        //       borderWidth: 2,
        //       '&:hover': {
        //         borderWidth: 2,
        //       },
        //     },
        //   },
        // },
        // MuiList: {
        //   styleOverrides: {
        //     root: {},
        //   },
        // },
        // MuiMenuItem: {
        //   styleOverrides: {
        //     root: {
        //       color: amber,
        //       alignItems: 'stretch',
        //       fontFamily:
        //         "Oswald, Roboto, 'Helvetica Neue', Arial, sans-serif",
        //     },
        //   },
        // },
        // MuiAccordion: {
        //   styleOverrides: {
        //     root: {
        //       color: amber,
        //       fontFamily:
        //         "Oswald, Roboto, 'Helvetica Neue', Arial, sans-serif",
        //     },
        //   },
        // },
        MuiCardHeader: {
          styleOverrides: {
            root: {
              backgroundColor: amber,
            },
          },
        },

      }
      : {
        // MuiAppBar: {
        //   styleOverrides: {
        //     colorPrimary: {
        //       backgroundColor: grey[300],
        //     },
        //   },
        // },
      }),
  },
});

export default theme;