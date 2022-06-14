import { apiEnvironment } from 'src/environments/api.environment';

export const environment = {
  production: true,
  baseApiUrl: 'https://small-time-landlord.herokuapp.com',
  apiKey: apiEnvironment.googleMapApi,
};
