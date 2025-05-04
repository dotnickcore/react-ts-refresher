import { ReactNode } from 'react';

export type InfoBoxTypes = {
    mode: 'hint' | 'warning';
    severity?: 'low' | 'medium' | 'high'
    children: ReactNode
}