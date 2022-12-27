import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  log(msg: string) {     //log method
    console.log(msg);
  }
}
