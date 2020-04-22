import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataModule} from '../parent/data.Module';
import {Router} from '@angular/router';

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

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  deleteChild(event) {
    this.deleteHandler.emit(event);
  }

  redirectPage(id) {
    this.router.navigate(['parent', id]);
  }
}
