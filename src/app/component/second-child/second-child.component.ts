import {Component, Input, OnInit} from '@angular/core';
import {ParentService} from '../../services/parent.service';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent implements OnInit {

  numbers: number[];

  constructor(private parentService: ParentService) { }

  ngOnInit() {
    this.numbers = this.parentService.numbers;
  }

}
