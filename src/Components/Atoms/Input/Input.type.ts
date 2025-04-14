import { ChangeEvent } from "react";

export interface InputProps{
    type:string;
    className:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
  }