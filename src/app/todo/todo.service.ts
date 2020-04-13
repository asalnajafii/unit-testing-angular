import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ToDoModule} from './todo.Module';
import {map, take} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TodoService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ToDoModule[]> {
    return this.http.get<ToDoModule[]>('https://jsonplaceholder.typicode.com/todos');
  }

  addTodo(toDo): Observable<ToDoModule> {
    return this.http.post<ToDoModule>('https://jsonplaceholder.typicode.com/todos', toDo);


  }

  delete(todo) {
    return this.http.delete('https://jsonplaceholder.typicode.com/todos/' + todo.id);
  }
}
