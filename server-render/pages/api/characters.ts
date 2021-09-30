import { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

const queryJson = `?api_key=${process.env.REACT_APP_API_KEY}`;

export class Connection {
  static async axios(contentType = 'application/json'): Promise<AxiosInstance> {

    const userStr = '';

    return new Promise(resolve => {
      const instance = axios.create({
        baseURL: process.env.REACT_APP_URL,
        headers: {
          contentType: contentType,
          Authorization: `Bearer ${userStr}`,
        },
      });
      return resolve(instance);
    });
  }
}


export default async (request: NextApiRequest, response: NextApiResponse)  => {

  let url: string;

  const { offset, name, id } = request.body;

  if (id) {
    url = `/characters/${queryJson}&format=json&filter=id:${id}`;
  } else if (name) {
    url = `/characters/${queryJson}&format=json&offset=${offset}&limit=75&sort=name:asc&filter=name:${name}`;
  } else {
    url = `/characters/${queryJson}&offset=${offset}&limit=75&format=json`;
  };


  const getAllCharacters = async (): Promise<AxiosResponse> => {
    const axios = await Connection.axios();
    return axios.get(url);
  };

  getAllCharacters().then(({ data }) => {
    response.json(data);
  }).catch((err) => {
    return response.json(err);
  });

}
