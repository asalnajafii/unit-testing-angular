import {Component, OnInit, ViewChild} from '@angular/core';
import {ToDoModule} from './todo.Module';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @ViewChild('data', {static: false}) data: HTMLInputElement;
  todoList: ToDoModule[] = [];

  constructor(private toDoService: TodoService) {
  }

  ngOnInit() {
    this.toDoService.getAll().subscribe(item => {
      this.todoList = item;
    });
  }

  insertTodo(data) {
    const res = {
      title: data,
      completed: true,
    };
    this.toDoService.addTodo(res).subscribe(
      resp => {
        this.todoList.splice(0, 0, resp);
      });
  }

  deleteTodo(todo) {
    if (confirm('Are you sure to delete ' + name)) {
      this.toDoService.delete(todo).subscribe(resp => {
        console.log('res', resp);
        const index = this.todoList.indexOf(todo);
        this.todoList.splice(index, 1);
      }, error => {
        alert('unexpected error happen');
      });
    }
  }

}
