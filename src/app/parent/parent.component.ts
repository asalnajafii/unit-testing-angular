import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataModule} from './data.Module';
import {DataService} from './data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild('name', {static: false}) name: ElementRef;
  listData: DataModule[] = [];
  newOne: DataModule = {
    title: 'asal',
    body: 'im auto generate',
    isRead: true
  };

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getAllData().subscribe(dataResp => {
      this.listData = dataResp;
    });
  }

  autoAdd(data: DataModule) {
    this.dataService.addData(data).subscribe(item => {
      console.log('item', item);
      this.listData.push(item);
    });
  }

  addWithName(value) {
    this.dataService.addDataWithInput(value).subscribe(item => {
      console.log('item', item);
      this.listData.push(item);
    });
  }

  deleteData(data: DataModule) {
    this.listData = this.listData.filter(item => item !== data);
    this.dataService.deletePost(data).subscribe();
  }

 /* detailData(id: number) {
    this.route.navigate(['/parent/', id]);
  }*/
}
