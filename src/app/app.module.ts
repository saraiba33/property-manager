import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';
import { ErrorComponent } from './error/error.component';
import { LandingComponent } from './landing/landing.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MyPropertiesComponent } from './my-properties/my-properties.component';
import { PropertyComponent } from './property/property.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { RentComparablesComponent } from './rent-comparables/rent-comparables.component';
import { UpdatePropertyComponent } from './update-property/update-property.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListingComponent,
    ErrorComponent,
    LandingComponent,
    NavBarComponent,
    MyPropertiesComponent,
    PropertyComponent,
    AddPropertyComponent,
    PropertyDetailsComponent,
    RentComparablesComponent,
    UpdatePropertyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
