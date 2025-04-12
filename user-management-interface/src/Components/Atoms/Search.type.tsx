import { ChangeEvent } from "react";

export interface SearchType{
    onBlur:(e:ChangeEvent<HTMLInputElement>)=>void
}