import { AxiosResponse } from 'axios';

import { Connection } from '../utils/coonection';

import { IAllCharacters } from './interfaces/characters';

export const getCharacters = async (payload: {offset?: number, name?: string, id?: number}): Promise<AxiosResponse<{data: IAllCharacters}>> => {
  const axios = await Connection.axios();
  return axios.post(`/api/characters`, {
      ...payload
  });
};
