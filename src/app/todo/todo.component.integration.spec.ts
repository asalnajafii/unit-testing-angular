import {TodoComponent} from './todo.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TodoService} from './todo.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {of} from 'rxjs';

// integration
describe('TodoComponent integration', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let mockTodoService;
  let TODO;
  beforeEach(async(() => {
    TODO = [
      {id: 1, title: 'asal1', completed: true},
      {id: 2, title: 'asal2', completed: true},
      {id: 3, title: 'asal3', completed: true}
    ];
    mockTodoService = jasmine.createSpyObj(['getAll', 'addTodo']);

    TestBed.configureTestingModule({
      declarations: [TodoComponent],
      providers: [{
        provide: TodoService, useValue: mockTodoService
      }],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
  }));

  it('should load todo from server', () => {
    mockTodoService.getAll.and.returnValue(of(TODO));

    fixture.detectChanges();
    expect(component.todoList.length).toBe(3);
  });
});
