import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { VehicleDetailsComponentComponent } from 'src/app/components/vehicle-details-component/vehicle-details-component.component';
import { bmwModel } from 'src/app/models/bmw-model';
import { ModelDataService } from 'src/app/services/model-data.service';

@Component({
  selector: 'app-bmw-models',
  templateUrl: './bmw-models.component.html',
  styleUrls: ['./bmw-models.component.less'],
  standalone: true,
  imports: [
    VehicleDetailsComponentComponent,
    NgForOf
  ]
})
export class BmwModelsComponent implements OnInit {
  models: bmwModel[]= []

  constructor(
    private modelDataService: ModelDataService
  ) { }

  ngOnInit(): void {
    this.modelDataService.getHeroes().subscribe(response => {
      // console.log('-----------response--------------')
      // console.log(response.models.vehicleDetails.list)
      this.models = response.models.vehicleDetails.list
    }

    )
  }

}
