import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';
import { ErrorComponent } from './error/error.component';
import { LandingComponent } from './landing/landing.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MyPropertiesComponent } from './my-properties/my-properties.component';
import { PropertyComponent } from './property/property.component';

@NgModule({
  declarations: [AppComponent, PropertyListingComponent, ErrorComponent, LandingComponent, NavBarComponent, MyPropertiesComponent, PropertyComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
