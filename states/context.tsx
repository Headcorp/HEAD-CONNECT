import React, { useState } from 'react';
import google from 'googleapis'

interface IGlobalContextProps {
  topics: google.classroom_v1.Schema$Topic[] | undefined;
  loading: boolean;
  setTopics: React.Dispatch<React.SetStateAction<google.classroom_v1.Schema$Topic[] | undefined>>;
  setLoading: (loading: boolean) => void;
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  topics: undefined,
  loading: false,
  setTopics: () => { },
  setLoading: () => { },
});

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [topics, setTopics] = useState<google.classroom_v1.Schema$Topic[] | undefined>([]);
  const [loading, setLoading] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        topics: topics,
        loading: loading,
        setTopics: setTopics,
        setLoading: setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};