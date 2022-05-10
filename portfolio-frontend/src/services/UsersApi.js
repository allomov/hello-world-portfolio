import axios from 'axios';
import { apiUrl } from 'core/config';
import { processResponseWithJsonapiCollection } from 'core/utils';

export const getUsers = async (options) => {
  const result = await axios.get(apiUrl + '/api/v1/users');
  return processResponseWithJsonapiCollection(result.data.data);
}
