import axios, { AxiosInstance } from 'axios';

export class Connection {
  static async axios(contentType = 'application/json'): Promise<AxiosInstance> {

    const userStr = '';

    return new Promise(resolve => {
      const instance = axios.create({
        headers: {
          contentType: contentType,
          Authorization: `Bearer ${userStr}`,
        },
      });
      return resolve(instance);
    });
  }
}
