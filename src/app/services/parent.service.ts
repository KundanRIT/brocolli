import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  private xnumbers: number[];

  constructor() { }

  set numbers(numbers) {
    this.xnumbers = numbers;
  }

  get numbers(): number[] {
    return this.xnumbers;
  }
}
