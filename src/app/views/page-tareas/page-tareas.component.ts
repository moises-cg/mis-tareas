import { Component, OnInit } from '@angular/core';
import { PageTareasService } from './page-tareas-service/page-tareas.service';
import { PageTareasModel } from './page-tareas.model';

@Component({
  selector: 'app-page-tareas',
  templateUrl: './page-tareas.component.html',
  styleUrls: ['./page-tareas.component.css']
})
export class PageTareasComponent implements OnInit {

  constructor(private tasks: PageTareasService) { }

  ngOnInit() {
  }

  public getTasks(): Array<PageTareasModel> {
    return this.tasks.getTasks();
  }

}
