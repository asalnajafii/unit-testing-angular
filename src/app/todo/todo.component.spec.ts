import {TodoComponent} from './todo.component';
import {TodoService} from './todo.service';
import {from, empty} from 'rxjs';

// unit test

describe('TodoComponent', () => {
  let component: TodoComponent;
  let service: TodoService;
  beforeEach(() => {
    // TodoService is service with injection http client
    service = new TodoService(null);
    component = new TodoComponent(service);
  });

  it('should set todo property with items returned form server', () => {
    // Arrange
    const todoListFake = [
      {
        id: 1,
        title: 'hey',
        completed: true,
      },
      {
        id: 2,
        title: 'hey2',
        completed: false,
      },
      {
        id: 3,
        title: 'hey3',
        completed: true,
      }
    ];
    spyOn(service, 'getAll').and.callFake(() => {
      return from([
        todoListFake
      ])
        ;
    });
    component.ngOnInit();
    // Act
    expect(component.todoList.length).toBe(3);
  });

  it('call insert to do method', () => {

    const spy = spyOn(service, 'addTodo').and.callFake(res => {
      return empty();
    });
    component.insertTodo('hello');

    expect(spy).toHaveBeenCalled();
  });

  it('should add new todo return from server', () => {

    const toDoData = {
      title: 'hello',
      completed: true,
    };

    const spy = spyOn(service, 'addTodo').and.callFake(res => {
      return from([toDoData]);
    });
    component.insertTodo('hello');
    expect(component.todoList.indexOf(toDoData)).toBeGreaterThan(-1);
  });

  // we want delete
  it('should call the server to delete todo item if confirm', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'delete').and.returnValue(empty());

    component.deleteTodo(1);
    expect(spy).toHaveBeenCalledWith(1);

  });

  // we don't want delete
  it('should NOT call the server to delete todo item if confirm', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'delete').and.returnValue(empty());

    component.deleteTodo(1);
    expect(spy).not.toHaveBeenCalled();


  });
});
