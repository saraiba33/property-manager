import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { environment } from 'src/environments/environment';
import { RentComparablesService } from '../rent-comparables.service';

const mapKey = environment.apiKey;
@Component({
  selector: 'app-rent-comparables',
  templateUrl: './rent-comparables.component.html',
  styleUrls: ['./rent-comparables.component.css'],
})
export class RentComparablesComponent {
  comparable?: any;
  constructor(private rentComparablesSevice: RentComparablesService) {}
  ngOnInit(): void {
    let loader = new Loader({
      apiKey: `${mapKey}`,
    });
    loader.load().then(() => {
      new google.maps.Map(document.querySelector('#map') as HTMLElement, {
        center: { lat: 38.8339, lng: -104.8214 },
        zoom: 6,
      });
    });
    //   this.rentComparablesSevice.getComparaables().subscribe((response) => {
    //     this.comparable = response;
    //     this.comparable = this.comparable.listings;
    //   });
  }
  // function initMap() {
  // initialize the map

  // Add the markers to the map
  // markers = locations.map((location, i) => {
  //   return new google.maps.Marker({
  //     icon: './images/pin.svg',
  //     position: location,
  //     zIndex: i,
  //     map: map
  //   });
  // });

  // // Add event listeners to the markers
  // markers.map((marker:any, i: any) => {
  //   marker.addListener('mouseover', () => {
  //       toggleIcon(marker, true);
  //   });
  //   marker.addListener('mouseout', () => {
  //       toggleIcon(marker, false);
  //   });
  // });
}
