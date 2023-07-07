import { useSyncedStore } from '@syncedstore/react';
import { createContext, useContext } from 'react';
import { store } from './index';


export const SyncedContext = createContext(0);

export const SyncedProvider = ({ children }) => {
  const state = useSyncedStore(store)
  return (
    <SyncedContext.Provider value={state}>
      {children}
    </SyncedContext.Provider>
  );
};

export const useDataStore = () => {
  const context = useContext(SyncedContext)
  if (context === undefined) {
    throw new Error('useDataStore must be used within a CountProvider')
  }
  return context
}