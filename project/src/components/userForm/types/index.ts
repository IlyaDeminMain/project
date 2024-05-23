import { ReactNode } from "react";

export type NameType = () => string[] | undefined;

export interface Children {
    children: ReactNode
}
