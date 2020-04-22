import {ParentDetailComponent} from './parent-detail.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {of, Subject} from 'rxjs';
import {DataService} from '../parent/data.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';

class ActivatedRouterSub {

  private subject = new Subject();

  push(value) {
    this.subject.next(value);
  }

  get paramMap() {
    return this.subject.asObservable();
  }
}

describe('detail page', () => {
  let component: ParentDetailComponent;
  let fixture: ComponentFixture<ParentDetailComponent>;
  let data;
  let mockDataService;
  beforeEach(() => {
    data = {
      id: 1,
      title: 'hello',
      body: 'body hello',
      isRead: true
    };
    mockDataService = jasmine.createSpyObj(['getById']);
    TestBed.configureTestingModule({
      declarations: [ParentDetailComponent],
      providers: [
        DataService,
        {provide: DataService, useValue: mockDataService},
        {provide: ActivatedRoute, useClass: ActivatedRouterSub}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ParentDetailComponent);
    component = fixture.componentInstance;

  });
  it('load parent detail ', () => {
    const route: ActivatedRouterSub = TestBed.get(ActivatedRoute);
    route.push({id: 1});
    mockDataService.getById.and.returnValue(of(data));
    fixture.detectChanges();
    expect(component.dataItem).toBe(data);
  });
});
