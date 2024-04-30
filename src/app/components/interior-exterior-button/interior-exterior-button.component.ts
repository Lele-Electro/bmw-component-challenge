import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-interior-exterior-button',
  templateUrl: './interior-exterior-button.component.html',
  styleUrls: ['./interior-exterior-button.component.less'],
  standalone: true,
  imports: [
    NgClass
  ]
})
export class InteriorExteriorButtonComponent implements OnInit {
  interiorVsExterior: 'interior' | 'exterior' = 'interior'

  constructor() { }

  ngOnInit(): void {
  }

  selectInterior(){
    this.interiorVsExterior = 'interior'
  }
  selectExterior(){
    this.interiorVsExterior = 'exterior'
  }

}
