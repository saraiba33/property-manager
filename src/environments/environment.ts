import { apiEnvironment } from 'src/environments/api.environment';

export const environment = {
  production: false,
  baseApiUrl: 'http://localhost:8080',
  apiKey: apiEnvironment.googleMapApi,
};
