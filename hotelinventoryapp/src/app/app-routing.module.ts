import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
// import { RoomsAddComponent } from './rooms-add/rooms-add.component';
// import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
// import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent, canActivate: [LoginGuard] },
  // { path: 'rooms', component: RoomsComponent },
  // { path: 'rooms/add', component: RoomsAddComponent },
  // { path: 'rooms/:roomid', component: RoomsBookingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rooms', loadChildren: ()=> import('./rooms/rooms.module').then(m=>m.RoomsModule),
   canActivate: [LoginGuard], 
   canLoad: [LoginGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'booking/:roomid', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
  //  canActivate: [LoginGuard]
   },
  { path: 'comment', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
