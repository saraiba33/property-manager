import { Component } from '@angular/core';
import { Property } from 'src/models/property';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css'],
})
export class UpdatePropertyComponent {
  hideForm() {
    document.querySelector('.update-form')?.classList.remove('show');
  }

  updateProperty(value: Property) {
    console.log(value);
  }
}
