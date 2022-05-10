import axios from 'axios';
import { apiUrl } from 'core/config';
import { processResponseWithJsonapiCollection, processResponseWithJsonapiResource } from 'core/utils';
import snakecaseKeys from 'snakecase-keys';
import FormData from 'form-data';

export const getUserPerformances = async (options) => {
  const result = await axios.get(apiUrl + '/api/v1/performances', {params: snakecaseKeys(options)});
  return processResponseWithJsonapiCollection(result.data.data);
}

export const getPerformance = async ({id}) => {
  const result = await axios.get(apiUrl + '/api/v1/performances/' + id);
  return processResponseWithJsonapiResource(result.data.data);
}

export const createPerformance = async ({userId, title, recording}) => {
  const formData = new FormData();
  formData.append('user_id', userId);
  formData.append('title', title);
  formData.append(`recording`, recording);

  const result = await axios.post(
    apiUrl + '/api/v1/performances', formData, {headers: { "Content-Type": "multipart/form-data" }}
  );
  return processResponseWithJsonapiResource(result.data.data);
}
