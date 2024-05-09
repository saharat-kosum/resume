import { createContext, useRef, ReactNode } from "react";

interface RefContextType {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  scrollIntoView: (ref: React.RefObject<HTMLDivElement>) => void;
}

export const RefContext = createContext<RefContextType | null>(null);

const RefContextProvider = ({ children }: { children: ReactNode }) => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollIntoView = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView();
    }
  };

  const contextValue: RefContextType = {
    homeRef,
    aboutRef,
    projectRef,
    contactRef,
    scrollIntoView,
  };

  return (
    <RefContext.Provider value={contextValue}>{children}</RefContext.Provider>
  );
};

export default RefContextProvider;
