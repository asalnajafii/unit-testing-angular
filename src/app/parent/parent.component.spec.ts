import {TestBed} from '@angular/core/testing';
import {of} from 'rxjs';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {ParentComponent} from './parent.component';
import {DataService} from './data.service';
import {Router} from '@angular/router';

describe('parentComponent', () => {
  let component: ParentComponent;
  let dataList;
  let mockDataService;
// with out dependency
  beforeEach(() => {
    dataList = [
      {id: 1, title: 'asal1', body: 'hey u', isRead: true},
      {id: 2, title: 'asal2', body: 'hey u', isRead: true},
      {id: 3, title: 'asal3', body: 'hey u', isRead: true}
    ];
    mockDataService = jasmine.createSpyObj(['getAllData', 'addData', 'deletePost']);
    TestBed.configureTestingModule({
      declarations: [{
        providers: DataService
      }],
      schemas: [NO_ERRORS_SCHEMA]
    });
    component = new ParentComponent(mockDataService);
  });


  it('should remove indicate from data list', () => {
    // return observable because we have subscribe
    mockDataService.deletePost.and.returnValue(of(true));
    component.listData = dataList;
    component.deleteData(dataList[0]);
    expect(component.listData.length).toBe(2);

  });
  it('should call delete', () => {
    // return observable because we have subscribe
    mockDataService.deletePost.and.returnValue(of(true));
    component.listData = dataList;
    component.deleteData(dataList[0]);
    expect(mockDataService.deletePost).toHaveBeenCalledWith(dataList[0]);

  });
});
