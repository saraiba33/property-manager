import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { environment } from 'src/environments/environment';
import { RentComparablesService } from '../rent-comparables.service';
import { Param } from 'src/models/param';
import { Listings } from 'src/models/comparable';

const mapKey = environment.apiKey;

type Location = {
  lat: number;
  lng: number;
};
@Component({
  selector: 'app-rent-comparables',
  templateUrl: './rent-comparables.component.html',
  styleUrls: ['./rent-comparables.component.css'],
})
export class RentComparablesComponent {
  comparable?: any;
  marker: any;
  map: any;
  location: Location = {
    lat: 38.8123,
    lng: -104.8123,
  };

  constructor(private rentComparablesSevice: RentComparablesService) {}

  // ngOnInit(): void {
  //   let loader = new Loader({
  //     apiKey: `${mapKey}`,
  //   });
  //   loader.load().then(() => {
  //     this.map = new google.maps.Map(
  //       document.querySelector('#map') as HTMLElement,
  //       {
  //         center: this.location,
  //         zoom: 14,
  //       }
  //     );
  //   });
  // }

  submitForm(values: Param) {
    this.rentComparablesSevice.getComparaables(values).subscribe((response) => {
      this.comparable = response;
      this.comparable = this.comparable.listings;
      document.querySelector('.hidden')?.classList.remove('hidden');
    });
  }

  // addMarker() {
  //   this.marker = new google.maps.Marker({
  //     position: this.location,
  //     map: this.map,
  //   });
  // }
}
