import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import { generateRandomUser } from '../../api/MockedRandomUser';
import { FIRST_REQUEST_PARAMS, FIRST_REQUEST_PAGINATION } from './const';
import { IParams, IResponse } from '../../api/MockedRandomUser/types';
import { IPagination } from '../../api/types';

interface IMockedRandomApiData {
  data: [];
  setData: Dispatch<SetStateAction<[]>>;
  pagination: IPagination;
  setPagination: Dispatch<SetStateAction<IPagination>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  params: IParams;
  setParams: Dispatch<SetStateAction<IParams>>;
  generateRandomUserData: () => void;
  error: string | null;
}

export const MockedRandomApiContext = createContext<IMockedRandomApiData>(
  {} as IMockedRandomApiData
);

export const MockedRandomApiProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<[]>([]);
  const [pagination, setPagination] = useState<IPagination>(
    FIRST_REQUEST_PAGINATION
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [params, setParams] = useState<IParams>(FIRST_REQUEST_PARAMS);
  const [error, setSerror] = useState<string | null>(null);

  const generateRandomUserData = async () => {
    setLoading(true);

    await generateRandomUser(params)
      .then((res: IResponse) => {
        setData(res.results);
        setPagination({
          ...(params.pagination as IPagination),
        });
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setSerror('Erro ao carregar dados!');
      });
  };

  return (
    <MockedRandomApiContext.Provider
      value={{
        data,
        setData,
        pagination,
        setPagination,
        loading,
        setLoading,
        generateRandomUserData,
        params,
        setParams,
        error,
      }}
    >
      {children}
    </MockedRandomApiContext.Provider>
  );
};

export const useRandonUserApi = () => useContext(MockedRandomApiContext);
