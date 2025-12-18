import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "NotoSans",
  },
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: "hsl(3, 86%, 64%)",
          light: "hsl(3, 71%, 56%)",
          dark: "hsl(3, 77%, 44%)",
        },
        background: {
          default: "hsl(226, 25%, 17%)",
          paper: "hsl(225, 23%, 24%)",
        },
        text: {
          primary: "hsl(200, 60%, 99%)",
          secondary: "hsl(0, 0%, 93%)",
          third: "#9b9da4",
        },
        special: {
          gradiant: "linear-gradient(180deg, #040918 0%, #091540 100%)",
          iconHover: "hsl(226, 11%, 37%)",
          borderHover: "hsl(226, 11%, 37%)",
          activeButton: "hsl(227, 75%, 14%)",
        },
      },
    },
    light: {
      palette: {
        primary: {
          main: "hsl(3, 86%, 64%)",
          light: "hsl(3, 71%, 56%)",
          dark: "hsl(3, 77%, 44%)",
        },
        background: {
          default: "hsl(200, 60%, 99%)",
          paper: "hsl(0, 0%, 93%)",
        },
        text: {
          primary: "hsl(227, 75%, 14%)",
          secondary: "hsl(227, 75%, 14%)",
          third: "hsl(226, 11%, 37%)",
        },
        special: {
          gradiant: "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)",
          iconHover: "hsl(0, 0%, 78%)",
          borderHover: "hsl(217, 61%, 90%)",
          activeButton: "hsl(200, 60%, 99%)",
        },
      },
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
