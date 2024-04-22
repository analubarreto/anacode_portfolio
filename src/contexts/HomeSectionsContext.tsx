import { createContext, useRef, useContext } from 'react';

type HomeSectionsContextType = React.MutableRefObject<HTMLDivElement | null>;
type HomeSectionsProviderProps = {
  children: React.ReactNode;
}

// Define the context
const HomeSectionsContext = createContext<HomeSectionsContextType | null>(null);

// Define a provider component
/**
 * Provides the context for the home sections.
 *
 * @param children - The child components.
 */
const HomeSectionsProvider = ({ children }: HomeSectionsProviderProps) => {
  const mainRef = useRef<HTMLDivElement | null>(null);
  
  return (
    <HomeSectionsContext.Provider value={mainRef}>
      {children}
    </HomeSectionsContext.Provider>
  );
};

// Define a custom hook for accessing the context
const useMainRef = () => {
  const context = useContext(HomeSectionsContext);
  if (context === undefined) {
    throw new Error('useMainRef must be used within a HomeSectionsProvider');
  }
  return context;
};

export { HomeSectionsProvider, useMainRef };