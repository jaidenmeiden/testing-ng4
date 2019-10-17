import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  lugares = [
    {id:1, name: 'Jaiden'},
    {id:2, name: 'Alfredo'}
  ];

  constructor() { }

  getLugares() {
    return this.lugares;
  }
}
