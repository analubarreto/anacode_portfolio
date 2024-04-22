import { createContext, useState, useContext, Dispatch, SetStateAction } from 'react';

type ActiveLinkProviderProps = {
  children: React.ReactNode;
}

type ActiveLinkContextType = [number, Dispatch<SetStateAction<number>>];

// Define the context with the type
const ActiveLinkContext = createContext<ActiveLinkContextType | undefined>(undefined);

// Define a provider component
const ActiveLinkProvider = ({ children }: ActiveLinkProviderProps) => {
  const [activeLink, setActiveLink] = useState<number>(1);
  
  return (
    <ActiveLinkContext.Provider value={[activeLink, setActiveLink]}>
      {children}
    </ActiveLinkContext.Provider>
  );
};

// Define a custom hook for accessing the context
const useActiveLink = () => {
  const context = useContext(ActiveLinkContext);
  if (context === undefined) {
    throw new Error('useActiveLink must be used within a ActiveLinkProvider');
  }
  return context;
};

export { ActiveLinkProvider, useActiveLink };