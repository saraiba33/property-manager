import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Property } from 'src/models/property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-my-properties',
  templateUrl: './my-properties.component.html',
  styleUrls: ['./my-properties.component.css'],
})
export class MyPropertiesComponent implements OnInit {
  properties: Property[] = [];
  error = false;

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    try {
      this.propertyService.fetchProperty().subscribe((response) => {
        this.properties = response.properties;
        document.querySelector('.spinner')?.classList.add('hidden');
      });
    } catch (error) {
      document.querySelector('.spinner')?.classList.add('hidden');
      this.error = true;
    }
  }
}
