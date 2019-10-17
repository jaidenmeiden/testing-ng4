import { Component, OnInit } from '@angular/core';
import {LugaresService} from '../../services/lugares.service';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent implements OnInit {
  lugares = [];

  constructor(
    private lugaresService: LugaresService
  ) {
    this.lugares = this.lugaresService.getLugares();
  }

  ngOnInit() {
  }

}
