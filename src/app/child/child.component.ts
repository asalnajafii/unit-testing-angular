import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataModule} from '../parent/data.Module';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() test: DataModule;
  @Input() id;
  @Input() name;
  @Output() deleteHandler = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }
  deleteChild(event) {
    this.deleteHandler.emit(event);
  }
}
