import { ReactNode } from "react";

export interface HeaderProps {
    image: {
        src: string;
        alt: string;
    };
    children: ReactNode
}