import { Component } from '@angular/core';
import { PropertyService } from '../property.service';
import { Property } from 'src/models/property';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent {
  property!: Property;

  constructor(private propertyService: PropertyService) {}

  addPropertyInfo(newProperty: Property) {
    this.propertyService
      .addProperty(newProperty)
      .subscribe((response) => (this.property = response.property));
  }
}
