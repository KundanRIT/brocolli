import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-third-child',
  templateUrl: './third-child.component.html',
  styleUrls: ['./third-child.component.scss']
})
export class ThirdChildComponent implements OnInit {
  data: string;
  @Output() emitData = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  passData() {
    this.emitData.emit(this.data);
  }

}
