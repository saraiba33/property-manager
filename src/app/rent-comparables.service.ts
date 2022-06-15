import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rentComp } from 'src/environments/environment';

const Url = `${rentComp.apiUrl}/rentalPrice?compCount=5&propertyType=Duplex-Triplex&squareFootage=900&bathrooms=1&address=4028%20E%20San%20Miguel%20St%2C%20Colorado%20Springs%2C%20CO%2080909&bedrooms=2`;

@Injectable({
  providedIn: 'root',
})
export class RentComparablesService {
  constructor(private http: HttpClient) {}

  options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fca52677e0msh346369663059d9dp12be98jsna7baf90425d0',
      'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com',
    },
  };

  getComparaables() {
    return this.http.get(Url, this.options);
  }
}

// .then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
