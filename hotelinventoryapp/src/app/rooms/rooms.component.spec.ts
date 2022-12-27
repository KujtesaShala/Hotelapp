import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { app_service_config } from '../AppConfig/appconfig.service';
import { ConfigService } from '../services/config.service';
import { RouteConfigToken } from '../services/routeConfig.service';

import { RoomsComponent } from './rooms.component';
import { RoomsService } from './services/rooms.service';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ RoomsComponent ],
      providers: [RoomsService, ConfigService,
      {
        provide: app_service_config,
        useValue: { apiEndpoint: "http://localhost:3000"}
      },
      {
        provide: RouteConfigToken,
        useValue: { title: 'rooms'}
      }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
