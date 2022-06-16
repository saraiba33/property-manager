import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { environment } from 'src/environments/environment';
import { RentComparablesService } from '../rent-comparables.service';
import { Comparable } from 'src/models/comparable';

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
  comparable?: Comparable;
  location: Location = {
    lat: 38.8339,
    lng: -104.8214,
  };

  options = {
    center: this.location,
    zoom: 12,
  };

  constructor(private rentComparablesSevice: RentComparablesService) {}

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: `${mapKey}`,
    });
    loader.load().then(() => {
      new google.maps.Map(
        document.querySelector('#map') as HTMLElement,
        this.options
      );
    });
    //   this.rentComparablesSevice.getComparaables().subscribe((response) => {
    //     this.comparable = response;
    //     this.comparable = this.comparable.listings;
    //   });
  }
  //initMap() {
  // initialize the map

  // Add the markers to the map
  // markers = locations.map((location, i) => {
  //   return new google.maps.Marker({
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
