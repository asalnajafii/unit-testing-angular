import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ParentComponent} from './parent.component';
import {DataService} from './data.service';
import {Component, Input} from '@angular/core';
import {of} from 'rxjs';
import {By} from '@angular/platform-browser';


describe('Parent Component with service', () => {
  let fixture: ComponentFixture<ParentComponent>;
  let mockDataService;
  let component: ParentComponent;
  let dataList;

// child mock
  @Component({
    selector: 'app-child',
    template: '<div></div>',

  })
  class FakeChildComponent {
    @Input() test;
    @Input() id;
    @Input() name;

  }


  beforeEach(() => {
    dataList = [
      {id: 1, title: 'asal1', body: 'hey u', isRead: true},
      {id: 2, title: 'asal2', body: 'hey u', isRead: true},
      {id: 3, title: 'asal3', body: 'hey u', isRead: true}
    ];
    mockDataService = jasmine.createSpyObj(['getAllData', 'addData', 'deletePost']);

    TestBed.configureTestingModule({
      declarations: [
        ParentComponent,
        FakeChildComponent],
      providers: [{
        provide: DataService, useValue: mockDataService
      }],
      /*  schemas: [NO_ERRORS_SCHEMA]*/
    });

    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
  });
  it('should set data correctly from service', () => {
    mockDataService.getAllData.and.returnValue(of(dataList));
    fixture.detectChanges();
    expect(component.listData.length).toBe(3);

  });
  it('should create one li for each data', () => {
    mockDataService.getAllData.and.returnValue(of(dataList));
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);

  });
});





