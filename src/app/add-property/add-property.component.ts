import { Component } from '@angular/core';

import { Property } from 'src/models/property';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent {
  addPropertyInfo(values: Property[]) {
    console.log(values);
  }
}
