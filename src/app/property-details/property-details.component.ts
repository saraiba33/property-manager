import { Component, Input } from '@angular/core';
import { RentComparablesService } from '../rent-comparables.service';
import { Comparable } from 'src/models/comparable';

type Listing = [
  {
    id: string;
    formattedAddress: string;
    longitude: number;
    latitude: number;
    city: string;
    state: string;
    zipcode: number;
    price: number;
    publishedDate: string;
    distance: number;
    daysOld: number;
    correlation: number;
    address: string;
    county: string;
    bedrooms: number;
    bathrooms: number;
    propertyType: string;
    squareFootage: number;
  }
];

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
})
export class PropertyDetailsComponent {
  @Input() address!: string;
  @Input() price!: number;
  @Input() distance?: number;
  @Input() correlation?: number;
  @Input() bedrooms?: number;
  @Input() bathrooms?: number;
  @Input() propertyType!: string;
  @Input() squareFootage?: number;
  comparable?: any;
  // constructor(private rentComparablesSevice: RentComparablesService) {}

  // ngOnInit() {
  //   this.rentComparablesSevice.getComparaables().subscribe((response) => {
  //     this.comparable = response;
  //     this.comparable = this.comparable.listings;

  //     console.log(this.comparable);
  //   });
  // }
}

// @Input() id!: number;
//   @Input() address!: string;
//   @Input() status!: string;
//   @Input() endDate?: number;
//   @Input() image?: string;
//   @Input() tenant1?: string;
//   @Input() tenant1Contact?: string;
//   @Input() tenant2?: string;
//   @Input() tenant2Contact?: string;
//   @Input() emergencyContact1?: string;
//   @Input() emergencyNumber1?: string;
//   @Input() emergencyContact2?: string;
//   @Input() emergencyNumber2?: string;
