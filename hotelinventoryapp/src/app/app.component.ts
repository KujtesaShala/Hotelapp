import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './rooms//logger.service';
import { localStorageToken } from './rooms/localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  //template : '<h1>Hello World from inline template</h1>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';


  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(@Optional() private loggerService: LoggerService,
  @Inject(localStorageToken) private localStorage: any,
  private initService: InitService,
  private configService: ConfigService,
  private router: Router 
  ) {
    console.log(initService.config);
  }

  ngOnInit() {
    // this.router.events.subscribe((event)=>{
    //   console.log(event);}
    //   );

    this.router.events.pipe(
      filter((event)=>event instanceof NavigationStart)
      ).subscribe((event)=> {
      console.log('Navigation Started');
    });

    this.router.events.pipe(
      filter((event)=>event instanceof NavigationEnd)
      ).subscribe((event)=> {
      console.log('Navigation Completed');
    });

    this.loggerService?.log('AppComponent.ngOnInit()');
    //this.name.nativeElement.innerText = "Hills Hotel";

    this.localStorage.setItem('name','Hills hotel');

  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;


  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;

  // }

}
