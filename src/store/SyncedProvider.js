// import { useSyncedStore } from '@syncedstore/react';
// import { store } from './index';
import { createContext, useContext } from 'react';


const DataContext = createContext(0);

export const DataProvider = ({ children, value }) => {
  // const state = useSyncedStore(store)
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataStore = () => {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error('useDataStore must be used within a CountProvider')
  }
  return context
}