import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/models/property';
import { PropertyService } from '../property.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
})
export class PropertyComponent {
  property?: Property;
  error = false;
  @ViewChild('update') form!: NgForm;

  constructor(
    private propertyService: PropertyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.propertyService.fetchProperty().subscribe((propertyResponse) => {
      this.property = this.propertyService.getProperty(
        +this.route.snapshot.params['id'],
        propertyResponse.properties
      );
    });
  }

  getPropertyListing() {
    this.router.navigate(['/my-properties']);
  }

  deleteProperty(id: number) {
    this.propertyService
      .deleteProperty(id)
      .subscribe(() => this.getPropertyListing());
  }

  getUpdatedProperty(id: number) {
    this.router.navigate([`/property/${id}`]);
  }

  submitUpdate(id: number, property: Property) {
    const updatedProperty: any = this.property;
    this.propertyService
      .updateProperty(id, updatedProperty)
      .subscribe(() => this.getUpdatedProperty(id));
    document.querySelector('.update-form')?.classList.remove('show');
  }

  showUpdateForm(property: Property) {
    document.querySelector('.update-form')?.classList.add('show');
    this.form.setValue({
      address: property.address,
      status: property.status,
      endDate: property.endDate,
      rentAmount: property.rentAmount,
      image: property.image,
      tenant1: property.tenant1,
      tenant1Contact: property.tenant1Contact,
      tenant2: property.tenant2,
      tenant2Contact: property.tenant2Contact,
      emergencyContact1: property.emergencyContact1,
      emergencyNumber1: property.emergencyNumber1,
      emergencyContact2: property.emergencyContact2,
      emergencyNumber2: property.emergencyNumber2,
    });
  }

  hideForm(id: number) {
    document.querySelector('.update-form')?.classList.remove('show');
    this.router.navigate([`/property/${id}`]);
  }
}
