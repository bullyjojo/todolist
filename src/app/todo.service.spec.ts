import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let todoService: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    todoService = TestBed.inject(TodoService);
  });

  it('should add Todo', () => {
    const count = todoService.todos.length
    const content = "Test Todo"
    const submitEvent = { preventDefault: () => { } } as SubmitEvent
    todoService.addTodo(submitEvent, content)
    expect(todoService.todos.length).toBe(count + 1)
    expect(todoService.todos.find(t => t.content == content)?.content).toBe(content)
  });

  it('should toggle Todo by id', () => {
    const todo = todoService.todos[0]
    const done = todo.done

    todoService.toogleDone(todo.id)
    expect(todoService.todos[0].done).toBe(!done)
  });

  it('should delete Todo by id', () => {
    const todo = todoService.todos[0]
    const count = todoService.todos.length
    todoService.deleteTodo(todo.id)
    expect(todoService.todos.length).toBe(count - 1)
    expect(todoService.todos.find(t => t.id == todo.id)).toBeUndefined()
  });

  it('should return an array of todos', () => {
    const todos = todoService.todos
    expect(Array.isArray(todos)).toBe(true)
  }) 
