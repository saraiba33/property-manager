import { Component, ViewChild } from '@angular/core';
import { Property } from 'src/models/property';
import { NgForm } from '@angular/forms';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css'],
})
export class UpdatePropertyComponent {
  constructor(private propertyService: PropertyService) {}

  hideForm() {
    document.querySelector('.update-form')?.classList.remove('show');
  }

  submitUpdate(id: number, value: Property) {
    console.log(id, value);
    this.propertyService.updateProperty(id, value);
  }
}
