import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers :[RoomsService]
})
export class EmployeeComponent implements OnInit {

  empName: string ='Lana';

  constructor( private roomsService: RoomsService) { }

  ngOnInit(): void {
  }

}
 