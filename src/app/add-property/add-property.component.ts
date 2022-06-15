import { Component } from '@angular/core';
import { PropertyService } from '../property.service';
import { Property } from 'src/models/property';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent {
  property!: Property;

  constructor(
    private propertyService: PropertyService,
    private router: Router
  ) {}

  getPropertyListing(property: Property) {
    this.router.navigate(['/my-properties']);
  }

  addPropertyInfo(newProperty: Property) {
    this.propertyService
      .addProperty(newProperty)
      .subscribe((response) =>
        this.getPropertyListing((this.property = response.property))
      );
    console.log(this.property);
  }
}
