import { NgClass, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { button } from 'src/app/models/button-model';

@Component({
  selector: 'app-bmw-button',
  templateUrl: './bmw-button.component.html',
  styleUrls: ['./bmw-button.component.less'],
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ]
})
export class BmwButtonComponent implements OnInit {

  constructor() { }

  @Input() buttonData!: button

  ngOnInit(): void {
  }

  returnFilePath(){
    return '/assets/icons/' + this.buttonData.icon?.iconType + '.svg'
  }

}
