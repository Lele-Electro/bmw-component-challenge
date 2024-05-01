import { Component, Input, OnInit } from '@angular/core';
import { bmwModel } from 'src/app/models/bmw-model';
import { InteriorExteriorButtonComponent } from '../interior-exterior-button/interior-exterior-button.component';
import { BmwButtonComponent } from '../bmw-button/bmw-button.component';
import { button } from 'src/app/models/button-model';
import { CurrencyPipe } from '@angular/common';
import { CustomCurrencyPipe } from 'src/app/pipes/custom-currency.pipe';

@Component({
  selector: 'app-vehicle-details-component',
  templateUrl: './vehicle-details-component.component.html',
  styleUrls: ['./vehicle-details-component.component.less'],
  standalone: true,
  imports : [
    InteriorExteriorButtonComponent,
    BmwButtonComponent,
    CurrencyPipe,
    CustomCurrencyPipe

  ]
})
export class VehicleDetailsComponentComponent implements OnInit {

  ngOnInit(): void {
    this.instantiateComponentsButtons();

  }

@Input() vehicle! : bmwModel;
  buttonOne!: button
  buttonTwo!: button
  constructor() {}

  returnModelImageFilePath(){
    const fileFolder = '/assets/images/models/'
    const fileExtension = '.png'
    const imageName = this.vehicle.modelName.replace(/\s/g, '').toLocaleLowerCase();
    return fileFolder + imageName + fileExtension
  }

  returnBackgroundImage(){
    const fileFolder = '/assets/images/models/'
    const fileExtension = '.png'
    const imageName = this.vehicle.modelName.replace(/\s/g, '').toLocaleLowerCase();
    console.log("background-image: " + "url('"  + fileFolder + imageName + fileExtension + "')")
    return "background-image: " + "url('"  + fileFolder + imageName + fileExtension + "')"


  }

  instantiateComponentsButtons(){
    this.buttonOne = {
      icon: {iconType: 'add'},
      text: 'Compare',
      type: 'standard',
    }

    this.buttonTwo = {
      icon: null,
      text: 'View Vehicle',
      type: 'callToAction',
    }
  }

}
