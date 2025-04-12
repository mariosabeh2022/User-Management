export enum ThemeType{
    light='Light',
    dark='Dark'
}

export interface ThemeStore{
    theme:ThemeType;
    toggleTheme:()=>void;
    setTheme:(theme:ThemeType)=>void;
}