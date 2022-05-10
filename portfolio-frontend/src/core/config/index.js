
const DEFAULT_API_URL = 'http://localhost:3000'

export const apiUrl =
  process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : DEFAULT_API_URL;
