import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _todos: Todo[] = [
    { id: 1, content: "Apprendre HTML", done: false, createdAt: new Date() },
    { id: 2, content: "Apprendre CSS", done: false, createdAt: new Date() },
    { id: 3, content: "Apprendre JavaScript", done: false, createdAt: new Date() }
  ]

  addTodo(event: SubmitEvent, content: string) {
    event.preventDefault()
    this._todos.push({
      id: this._todos.length + 1,
      content: content,
      done: false,
      createdAt: new Date()
    })
  }

  toogleDone(id: number) {
    const todo = this._todos.find(t => t.id == id)!
    todo.done = !todo.done
  }

  deleteTodo(id: number) {
    this._todos = this._todos.filter(t => t.id != id)
  }

  get todos() {
    return this._todos;
  }
}
