import { Injectable } from '@angular/core';
import { PageTareasModel } from '../page-tareas.model';

@Injectable({
  providedIn: 'root'
})
export class PageTareasService {
  private tasks: Array<PageTareasModel> = [
    {
      complete: false,
      date: new Date(),
      description: 'test description',
      id: Date.now(),
      title: 'My first task'
    },
    {
      complete: false,
      date: new Date(),
      description: 'test description 2',
      id: Date.now(),
      title: 'My second task'
    }
  ];
  constructor() {}
  public createTask(): void {
    // Añadir al arrar
  }

  public removeTask(id: number) {

  }

  public getTasks(): Array<PageTareasModel> {
    return this.tasks;
  }

  // TODO: Edit task

  // complete task
}
