export interface CustomTheme{
    colors: {
        primary: string,
        secondary:string,
      }
}

export interface PropsWithTheme{
    theme?: CustomTheme;
        
}
