import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
})
export class PropertyDetailsComponent {
  @Input() address!: string;
  @Input() price!: number;
  @Input() distance?: number;
  @Input() correlation?: number;
  @Input() bedrooms?: number;
  @Input() bathrooms?: number;
  @Input() propertyType!: string;
  @Input() squareFootage?: number;
  comparable?: any;
}
