import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { apiEnvironment } from 'src/private-environment/api.environment';

const mapKey = apiEnvironment.googleMapApi;
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
  //       center: { lat: 38.8339, lng: -104.8214 },
  //       zoom: 6,
  //     });
  //   });
  // }
}
