import { Theme, TypographyVariantsOptions } from "@mui/material/styles";

/*
As seguintes fontes requerem que você as importe: (as demais funcionam sem precisar importar)

  `montserrat`,
  `Open Sans`,
  `Oswald`,
  `Poppins`,
  `"Roboto"`,
  `"Segoe UI"`,
  `Source Sans Pro`,

  `Tahoma`,
  `Palatino`,
  `"Oxygen"`,
  `"Ubuntu"`,
  `"Cantarell"`,
  `"Fira Sans"`,
  `"Droid Sans"`,
  `sans-serif`,
  `"Helvetica Neue"`,
  `"BlinkMacSystemFont"`,
  `-apple-system`,
  `Avant Garde`,
  `Century Gothic`,
  `Helvetica`,
  `Lucida Grande`,
  `Myriad Pro`,
  `lato`,
  `Roboto`,
  
*/
export const options: TypographyVariantsOptions = {
  fontFamily: [
    `Comic Sans MS`,
    `Arial`,
    `Candara`,
    `Calibri`,
    `Consolas`,
    `Courier`,
    `Courier New`,
    `Georgia`,
    `Impact`,
    `Lucida Sans Unicode`,
    `Segoe UI`,
    `Times`,
    `Times New Roman`,
    `Trebuchet MS`,
    `Verdana`,
  ].join(","),
};

const applyColor = (theme:Theme) => {
   const defaultColorWhite = "#fff";
   const defaultColorBlack = "#000";
   return theme.palette.background.default.toString() === "#000" ? defaultColorWhite : defaultColorBlack;
}

export const overrides = (theme: Theme): TypographyVariantsOptions => (
  {
   h1:{
      fontWeight:700, 
      color: applyColor(theme),
      [theme.breakpoints.up("xs")]: { fontSize: "1.8rem" }, // extra-small: 0px
      [theme.breakpoints.up("sm")]: { fontSize: "3rem" },   // small: 600px
      [theme.breakpoints.up("md")]: { fontSize: "3rem" },   // medium: 900px
      [theme.breakpoints.up("lg")]: { fontSize: "3.5rem" }, // large: 1200px
   },
    h2: { 
      fontWeight:600,
      color: applyColor(theme),
      [theme.breakpoints.up("xs")]: { fontSize: "1.4rem" }, 
      [theme.breakpoints.up("sm")]: { fontSize: "2.5rem" }, 
      [theme.breakpoints.up("md")]: { fontSize: "2.5rem" }, 
      [theme.breakpoints.up("lg")]: { fontSize: "3rem" }, 
   },
    h3: { 
      fontSize: "1.5rem", 
      fontWeight:500, 
      color: applyColor(theme),
      [theme.breakpoints.up("xs")]: { fontSize: "1rem" }, 
      [theme.breakpoints.up("sm")]: { fontSize: "2rem" }, 
      [theme.breakpoints.up("md")]: { fontSize: "2rem" }, 
      [theme.breakpoints.up("lg")]: { fontSize: "2.5rem" },
   },

    body1: { // body1 -> <p></p>
      fontSize: "1rem", 
      fontWeight:400,
      color: applyColor(theme),
      [theme.breakpoints.up("xs")]: { fontSize: "0.6rem" }, 
      [theme.breakpoints.up("sm")]: { fontSize: "1.5rem" }, 
      [theme.breakpoints.up("md")]: { fontSize: "1.5rem" }, 
      [theme.breakpoints.up("lg")]: { fontSize: "2rem" },
   },
    caption: {
      fontWeight:300,
      color: applyColor(theme),
      [theme.breakpoints.up("xs")]: { fontSize: "0.4rem" }, 
      [theme.breakpoints.up("sm")]: { fontSize: "1rem" }, 
      [theme.breakpoints.up("md")]: { fontSize: "1rem" }, 
      [theme.breakpoints.up("lg")]: { fontSize: "1.5rem" },
   },

    button: { textTransform: "none" },
 
    sectionTitle: {
     color: theme.palette.titles.main,
     fontSize: "2.5em !important", 
     fontFamily: "Poppins",
     fontWeight: 700,
     display: "block",
     [theme.breakpoints.up("iphone-5-SE")]: { fontSize: "2rem" },
     [theme.breakpoints.up("iphone-6-7-8")]: { fontSize: "2.4rem" },
    },

    sectionSubtitle: {
      display: "block",
      color: theme.palette.subTitles.main,
      [theme.breakpoints.up("iphone-5-SE")]: { fontSize: "1rem" },
      [theme.breakpoints.up("iphone-6-7-8")]: { fontSize: "1.2rem" },
    },
  }
);

 
// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    sectionTitle: true;
    sectionSubtitle: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    sectionTitle: React.CSSProperties;
    sectionSubtitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    sectionTitle?: React.CSSProperties;
    sectionSubtitle?: React.CSSProperties;
  }
}