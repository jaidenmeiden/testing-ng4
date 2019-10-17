import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarComponent } from './lugar.component';
import {LugaresService} from '../../services/lugares.service';

describe('LugarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LugarComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LugarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the same places as the service', () => {
    const fixture = TestBed.createComponent(LugarComponent);
    const app = fixture.debugElement.componentInstance;
    const lugaresService = fixture.debugElement.injector.get(LugaresService);
    expect(app.lugares).toEqual(lugaresService.lugares);
  });
});
