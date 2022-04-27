import React from "react";
import { Global, css, useTheme, ThemeProvider } from "@emotion/react";

export const GlobalStyles = (props:any) => {
  let theme:any = useTheme();
  return (
    <>
      <Global
        styles={css`
        body{
          background-color:${theme.colors.background};
        }
        *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        
        
        `}
      />
    </>
  );
};
