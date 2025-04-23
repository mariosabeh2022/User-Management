import { ChangeEvent, FocusEvent, Ref } from "react";

export interface InputProps {
  type: string;
  className: string;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  ref?: Ref<HTMLInputElement>;
}
