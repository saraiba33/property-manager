import { Injectable } from '@angular/core';
import { Property } from 'src/models/property';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

type Response = {
  properties: Property[];
};

const propertiesEndpoint = `${environment.baseApiUrl}/api/properties`;
@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  properties: Property[] = [
    {
      image:
        'https://ap.rdcpix.com/7e1f558e2f6a5e5f5611add7cc966e76l-m2099888312s-w642_h420_q75.webp',
      address: '7365 Forest Meadows',
      status: 'Rented',
      endDate: '05/31/2023',
    },
    {
      image:
        'https://ap.rdcpix.com/7e1f558e2f6a5e5f5611add7cc966e76l-m2099888312s-w642_h420_q75.webp',
      address: '7365 Forest Meadows',
      status: 'Rented',
      endDate: '05/31/2023',
    },
    {
      image:
        'https://ap.rdcpix.com/7e1f558e2f6a5e5f5611add7cc966e76l-m2099888312s-w642_h420_q75.webp',
      address: '7365 Forest Meadows',
      status: 'Rented',
      endDate: '05/31/2023',
    },
  ];

  constructor(private http: HttpClient) {}

  fetchProperty() {
    return this.http.get<Response>(propertiesEndpoint);
  }
}
