import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/models/property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
})
export class PropertyComponent {
  property?: Property;
  error = false;

  constructor(
    private propertyService: PropertyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.propertyService.fetchProperty().subscribe((propertyResponse) => {
      this.property = this.propertyService.getProperty(
        +this.route.snapshot.params['id'],
        propertyResponse.properties
      );
    });
  }
}

// ngOnInit(): void {
//   this.propertyService
//     .getProperty(+this.route.snapshot.params['id'], this.property)
//     .subscribe((response) => {
//       this.property = response;
//     });
// }
