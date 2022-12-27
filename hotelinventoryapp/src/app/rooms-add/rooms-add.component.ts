import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomList } from '../rooms/rooms';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit {

  room: RoomList = {
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0,
    roomNumber: ''
  }

  successMessage: string = '';

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
  }

  AddRoom(roomsForm: NgForm ) {
    this.roomsService.addRoom(this.room).subscribe((data) => this.successMessage ='Room Added Successfully');
    roomsForm.resetForm({
      roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0,
    roomNumber:''

    });
  }

}
