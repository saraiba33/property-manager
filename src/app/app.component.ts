import { Component, OnInit } from '@angular/core';
import { Property } from 'src/models/property';
import { PropertyService } from './property.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.fetchProperty().subscribe((response) => {
      this.properties = response.properties;
    });
  }
}
