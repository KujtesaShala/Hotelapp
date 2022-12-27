import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { RoomsListComponent } from './rooms-list/rooms-list.component';
// import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { app_config, app_service_config } from './AppConfig/appconfig.service';
// import { RoomsService } from './rooms/services/rooms.service';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { NotfoundComponent } from './notfound/notfound.component';
// import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
// import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailvalidatorDirective } from './emailvalidator/emailvalidator.directive';
// import { RoomsModule } from './emailvalidator/rooms.module';
import { HeaderModule } from './header/header.module';
import { RouteConfigToken } from './services/routeConfig.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ROUTES } from '@angular/router';
import { GlobalErrorHandler } from './errorhandler.service';


function initFactory(initService: InitService){
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    // RoomsComponent,
    // RoomsListComponent,
    // HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    NotfoundComponent,
    // RoomsBookingComponent,
    // RoomsAddComponent,
    LoginComponent,
    HoverDirective,
    EmailvalidatorDirective
  ],
  imports: [
    BrowserModule,
    // RoomsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule, 
    HttpClientModule,
    FormsModule,
    HeaderModule,
    MatSnackBarModule
  ],
  providers: [
    {
    provide: app_service_config,
    useValue: app_config
    },
    {
      provide: RouteConfigToken,
      useValue: {title: 'Home'},
    },
    {
      provide: HTTP_INTERCEPTORS ,
      useClass: RequestInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true
    },
    {
      provide: ErrorHandler, useClass: GlobalErrorHandler
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
