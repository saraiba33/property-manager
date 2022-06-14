import { apiEnvironment } from 'src/private-environment/api.environment';

export const environment = {
  production: false,
  baseApiUrl: 'http://localhost:8080',
  apiKey: apiEnvironment.googleMapApi,
};
