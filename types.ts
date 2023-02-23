import { FC, PropsWithChildren } from "react"

// master type for our components
export type CS = FC<any> & PropsWithChildren
export interface Input {
    name: string;
    size: number;
    type: string;
    outerText?: string;
    items?: Input[];
  }
  