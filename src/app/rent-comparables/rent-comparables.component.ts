import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { environment } from 'src/environments/environment';
environment;

const mapKey = environment.googleMapApi;
@Component({
  selector: 'app-rent-comparables',
  templateUrl: './rent-comparables.component.html',
  styleUrls: ['./rent-comparables.component.css'],
})
export class RentComparablesComponent {
  // ngOnInit(): void {
  //   let loader = new Loader({
  //     apiKey: `${mapKey}`,
  //   });
  //   loader.load().then(() => {
  //     new google.maps.Map(document.querySelector('#map') as HTMLElement, {
  //       center: { lat: 51.233334, lng: 6.78333 },
  //       zoom: 6,
  //     });
  //   });
  // }
}
