import { Component, OnInit } from '@angular/core';
import { Property } from 'src/models/property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-my-properties',
  templateUrl: './my-properties.component.html',
  styleUrls: ['./my-properties.component.css'],
})
export class MyPropertiesComponent implements OnInit {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.fetchProperty().subscribe((response) => {
      this.properties = response.properties;
    });
  }
}
