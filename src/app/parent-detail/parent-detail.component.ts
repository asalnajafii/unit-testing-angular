import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataModule} from '../parent/data.Module';
import {DataService} from '../parent/data.service';

@Component({
  selector: 'app-parent-detail',
  templateUrl: './parent-detail.component.html',
  styleUrls: ['./parent-detail.component.css']
})
export class ParentDetailComponent implements OnInit {
  public dataItem: DataModule;
  public id: number;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
    });
    this.dataService.getById(this.id).subscribe(item => {
      this.dataItem = item;
    });
  }

}
