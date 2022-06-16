import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Param } from 'src/models/param';
import { Comparable, Listings } from 'src/models/comparable';

const url = 'https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice';

type ComparableResponse = {
  comparable: Listings;
};

@Injectable({
  providedIn: 'root',
})
export class RentComparablesService {
  options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fca52677e0msh346369663059d9dp12be98jsna7baf90425d0',
      'X-RapidAPI-Host': 'realtymole-rental-estimate-v1.p.rapidapi.com',
    },
    params: {
      propertyType: ``,
      address: ``,
      bathrooms: ``,
      compCount: 0,
      squareFootage: ``,
      bedrooms: ``,
    },
  };

  constructor(private http: HttpClient) {}

  getComparaables(param: Param) {
    return this.http.get(
      url,
      (this.options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            'fca52677e0msh346369663059d9dp12be98jsna7baf90425d0',
          'X-RapidAPI-Host': 'realtymole-rental-estimate-v1.p.rapidapi.com',
        },
        params: {
          propertyType: `${param.propertyType}`,
          address: `${param.address}`,
          bathrooms: `${param.bathrooms}`,
          compCount: 4,
          squareFootage: `${param.squareFootage}`,
          bedrooms: `${param.bedrooms}`,
        },
      })
    );
  }
}
