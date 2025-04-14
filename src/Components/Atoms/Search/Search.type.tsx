import { ChangeEvent } from "react";

export interface SearchProps{
    label:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    
}