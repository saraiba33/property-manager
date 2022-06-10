import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.css'],
})
export class PropertyListingComponent {
  @Input() id!: number;
  @Input() address!: string;
  @Input() status!: string;
  @Input() endDate?: string;
  @Input() image?: string;
}
