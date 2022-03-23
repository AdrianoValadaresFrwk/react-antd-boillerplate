import React, { createContext, useContext, useState } from 'react';

interface IDrawerContext {
  collapsed: boolean;
  setCollapse: () => void;
}

export const DrawerContext = createContext<IDrawerContext>(
  {} as IDrawerContext
);

export const DrawerProvider: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const setCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <DrawerContext.Provider
      value={{
        collapsed,
        setCollapse,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => useContext(DrawerContext);
