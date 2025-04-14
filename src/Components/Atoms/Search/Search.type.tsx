import { ChangeEvent } from "react";

export interface SearchProps{
    label:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    onBlur:(e:ChangeEvent<HTMLInputElement>)=>void,
    
}