import { Injectable } from '@angular/core';
import { Property } from 'src/models/property';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

type PropertyResponse = {
  properties: Property[];
};

type AddResponse = {
  property: Property;
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

  getProperty(id: number, properties: Property[]) {
    return properties.find((property) => property.id == id);
  }

  addProperty(property: Property) {
    return this.http.post<AddResponse>(`${propertiesEndpoint}`, property);
  }

  deleteProperty(id: number): Observable<object> {
    return this.http.delete(`${propertiesEndpoint}/${id}`);
  }
}
