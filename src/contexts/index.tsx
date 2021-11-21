import { ReactNode } from 'react';
import { ModelContextProvider } from '../contexts/ModelContext';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ModelContextProvider>
      {children}
    </ModelContextProvider>
  )
}