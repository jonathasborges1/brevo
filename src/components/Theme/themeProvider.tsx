import { ReactNode } from "react";

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import MyTheme from "@components/Theme";

interface Props {
   children: ReactNode;
 }
 
 const ThemeProvider: React.FC<Props> = ({children})  => {
    return(
     <MuiThemeProvider theme={MyTheme}>
        {children}
     </MuiThemeProvider>
    ) 
  };
  
 export default ThemeProvider;