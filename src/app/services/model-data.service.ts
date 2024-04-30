import { Injectable } from '@angular/core';
import { VeicleAPIObject, bmwModel } from '../models/bmw-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModelDataService {

  readonly baseUrl = '../assets/data/model-cart-data.json';


  constructor(
    private http: HttpClient
  ) {

   }

  getHeroes(): Observable<VeicleAPIObject> {
    return this.http.get<VeicleAPIObject>(this.baseUrl)

  }
}

