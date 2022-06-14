import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/models/property';
import { PropertyService } from '../property.service';
import { Router } from '@angular/router';

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
}
