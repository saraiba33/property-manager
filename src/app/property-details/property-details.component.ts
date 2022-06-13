import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
})
export class PropertyDetailsComponent {
  @Input() id!: number;
  @Input() address!: string;
  @Input() status!: string;
  @Input() endDate?: number;
  @Input() image?: string;
  @Input() tenant1?: string;
  @Input() tenant1Contact?: string;
  @Input() tenant2?: string;
  @Input() tenant2Contact?: string;
  @Input() emergencyContact1?: string;
  @Input() emergencyNumber1?: string;
  @Input() emergencyContact2?: string;
  @Input() emergencyNumber2?: string;
}
