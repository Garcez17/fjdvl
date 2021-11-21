import { createContext, ReactNode, useCallback, useState } from "react";

type ModelContextData = {
  isModelLoading: boolean;
  toogleModelLoading: () => void;
}

export const ModelContext = createContext({} as ModelContextData);

type ModelContextProviderProps = {
  children: ReactNode;
}

export function ModelContextProvider({ children }: ModelContextProviderProps) {
  const [isModelLoading, setIsModelLoading] = useState(true);

  const toogleModelLoading = useCallback(() => {
    setIsModelLoading(false);
  }, []);

  return (
    <ModelContext.Provider value={{ isModelLoading, toogleModelLoading }}>
      {children}
    </ModelContext.Provider>
  )
}