import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { BookingService } from './booking.service';
import { CustomValidator } from './validators/custom-validator';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;

  bookingForm1!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }
  get guests1() {
    return this.bookingForm1.get('guests') as FormArray;
  }

  constructor(
    private configService: ConfigService,
    private fb: FormBuilder,
     private bookingService: BookingService,
     private route: ActivatedRoute
     ) { }


  //form with controls:
  // ngOnInit(): void {
  //   const roomId = this.route.snapshot.paramMap.get('roomId');
  //   this.bookingForm = this.fb.group({
  //     roomId: new FormControl({ value: roomId, disabled: true }, {validators: [Validators.required]}),
  //     guestEmail: ['', {updateOn: 'blur', validators: [Validators.required, Validators.email]}],
  //     checkinDate: [''],
  //     checkoutDate: [''],
  //     bookingStatus: [''],
  //     bookingAmount: [''],
  //     bookingDate: [''],
  //     mobileNumber: ['',{updateOn: 'blur'}],
  //     guestName: ['', [Validators.required, Validators.minLength(5), CustomValidator.ValidateName, CustomValidator.ValidateSpecialChar('*')]],
  //     address: this.fb.group({
  //       addressLine: ['', {validators: [Validators.required]}],
  //       addressLine2: [''],
  //       city: ['',{validators: [Validators.required]}],
  //       state: ['',{validators: [Validators.required]}],
  //       country: [''],
  //       zipCode: [''],
  //     }),
  //     guests: this.fb.array([this.addGuestControl()]),
  //     tnc: new  FormControl(false, {validators: [Validators.requiredTrue]}),
  //   }, { updateOn: 'blur',validators: [CustomValidator.validatedate] });
  //   //this.getBookingData();

  // }

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomId');
    this.bookingForm1 = this.fb.group({
      roomId: new FormControl({ value: roomId, disabled: false }, {validators: [Validators.required]}),
      guestEmail: ['', {updateOn: 'blur', validators: [Validators.required, Validators.email]}],
      checkinDate: [''],
      checkoutDate: [''],
      mobileNumber: ['',{updateOn: 'blur'}],
      guestName: ['', [Validators.required, Validators.minLength(5), CustomValidator.ValidateName, CustomValidator.ValidateSpecialChar('*')]],
      tnc: new  FormControl(false, {validators: [Validators.requiredTrue]}),
    }, { updateOn: 'blur',validators: [CustomValidator.validatedate] }
    
    );
    this.getBookingData1();
  }

  
  // this.bookingForm.valueChanges.subscribe((data)=> {
  //   this.bookingService.bookRoom(data).subscribe((data)=>{})
  // });

  // this.bookingForm.valueChanges.pipe(
  //   switchMap((data)=>this.bookingService.bookRoom((data))).subscribe((data)=> console.log(data));
  // )

    
  addBooking1() {
    console.log("tt")
    console.log(this.bookingForm1.getRawValue());
    this.bookingForm1.reset({
      roomId: '2', 
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      mobileNumber: '',
      guestName: '',
      tnc:false,
    });

  }

  // addBooking() {
  //   console.log(this.bookingForm.getRawValue);
  //   // this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((data)=>{console.log(data)});
  //   this.bookingForm.reset({
  //     roomId: '2', 
  //     guestEmail: '',
  //     checkinDate: '',
  //     checkoutDate: '',
  //     bookingStatus: '',
  //     bookingAmount: '',
  //     bookingDate: '',
  //     mobileNumber: '',
  //     guestName: '',
  //     address: {
  //       addressLine: '',
  //       addressLine2: '',
  //       city: '',
  //       state: '',
  //       country: '',
  //       zipCode: '',
  //     },
  //     guests: [],
  //     tnc:false,
  //   });

  // }

  getBookingData1(){
    this.bookingForm1.patchValue({
      guestEmail: 'test@gmail.com',
      checkinDate: new Date('22-Feb-2020'),
      checkoutDate: '',
      mobileNumber: '',
      guestName: '',
      tnc:false,
    });
  }

  

  // getBookingData(){
  //   this.bookingForm.patchValue({
  //     guestEmail: 'test@gmail.com',
  //     checkinDate: new Date('22-Feb-2020'),
  //     checkoutDate: '',
  //     bookingStatus: '',
  //     bookingAmount: '',
  //     bookingDate: '',
  //     mobileNumber: '',
  //     guestName: '',
  //     address: {
  //       addressLine: '',
  //       addressLine2: '',
  //       city: '',
  //       state: '',
  //       country: '',
  //       zipCode: '',
  //     },
  //     guests: [],
  //     tnc:false,
  //   });
  // }

  addGuest() {
    this.guests.push(this.addGuestControl());
  }

  addGuestControl() {
    return this.fb.group({ guestName: ['', {validators: [Validators.required]}], age: new FormControl('') });
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletePassport() {
    if(this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(i:number) {
    this.guests.removeAt(i);
  }

}
