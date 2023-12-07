import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private readonly todoService: TodoService) { }

  addTodo(event: SubmitEvent, content: string) {
    this.todoService.addTodo(event, content)
  }

  toogleDone(id: number) {
    this.todoService.toogleDone(id)
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id)
  }

  get todos() {
    return this.todoService.todos
  }
}
