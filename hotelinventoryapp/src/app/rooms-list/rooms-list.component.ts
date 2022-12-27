import { Component, EventEmitter, OnInit, Input, Output, OnChanges, ChangeDetectionStrategy, SimpleChanges, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RoomList } from '../rooms/rooms';
import { Room } from '../rooms/rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() rooms: RoomList[] = [];

  @Input() title: string = '';

  @Input() price: number = 0;

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {
  }

  selectRoom(room: RoomList) {

    this.selectedRoom.emit(room);
  };

  ngOnDestroy() {
    console.log('on destroy is called');
  }

  editRating(room: any){
    console.log(room);
  }

  ratingcount=0;
  totalrating=0;

  Finalrating: any;

  ratingcontrol = new FormControl(0);

  GetRating(room: any){
    console.log("Rating", room);
    this.ratingcount++;
    this.totalrating += this.ratingcontrol?.value || 0;
    // console.log(this.ratingcontrol.value);
    this.Finalrating = (this.totalrating/this.ratingcount).toFixed(1)
    room.finalRating = (this.totalrating/this.ratingcount).toFixed(1);
  }
}
