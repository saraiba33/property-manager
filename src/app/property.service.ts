import { Injectable } from '@angular/core';
import { Property } from 'src/models/property';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

type PropertyResponse = {
  properties: Property[];
};

const propertiesEndpoint = `${environment.baseApiUrl}/api/properties`;
@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor(private http: HttpClient) {}

  fetchProperty() {
    return this.http.get<PropertyResponse>(propertiesEndpoint);
  }

  getProperty(id: number): Observable<Property> {
    const url = `${propertiesEndpoint}/${id}`;
    return this.http.get<Property>(url);
  }
}
