import { IParams } from '../../api/MockedRandomUser/types';
import { IPagination } from '../../api/types';

export const FIRST_REQUEST_PARAMS: IParams = {
  results: 200,
};

export const FIRST_REQUEST_PAGINATION: IPagination = {
  current: 1,
  pageSize: 10,
};
