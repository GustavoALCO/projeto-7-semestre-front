import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {GoogleMap, GoogleMapsModule, MapCircle, MapInfoWindow, MapMarker} from "@angular/google-maps";

@Component({
  selector: 'app-angular-google-maps',
  standalone: true,
  imports: [
    GoogleMapsModule,
    CommonModule
  ],
  templateUrl: './angular-google-maps.component.html',
  styleUrl: './angular-google-maps.component.scss'
})
export class AngularGoogleMapsComponent {

  center: google.maps.LatLngLiteral = { lat: -23.485, lng: -46.63 };
  markers: google.maps.LatLngLiteral[] = [
    { lat: -23.4813, lng: -46.6015 },
    { lat: -23.475074840699484, lng: -46.66541466733489 },
    { lat: -23.500929853499, lng: -46.61385933689497 }
  ];
}