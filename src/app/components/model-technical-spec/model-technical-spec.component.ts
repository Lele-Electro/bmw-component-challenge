import { Component, Input, OnInit } from '@angular/core';
import { TechnicalSpecs } from 'src/app/models/bmw-model';

@Component({
  selector: 'app-model-technical-spec',
  templateUrl: './model-technical-spec.component.html',
  styleUrls: ['./model-technical-spec.component.less'],
  standalone: true
})
export class ModelTechnicalSpecComponent implements OnInit {
  @Input() technicalSepcs!: TechnicalSpecs

  constructor() { }

  ngOnInit(): void {
  }

}
