import { apiEnvironment } from 'src/private-environment/api.environment';

export const environment = {
  production: true,
  baseApiUrl: 'https://small-time-landlord.herokuapp.com',
  apiKey: apiEnvironment.googleMapApi,
};
