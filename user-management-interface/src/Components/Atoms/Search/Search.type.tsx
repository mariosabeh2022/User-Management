import { ChangeEvent } from "react";

export interface SearchProps{
    onBlur:(e:ChangeEvent<HTMLInputElement>)=>void
}