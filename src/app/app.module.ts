import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { PageTareasComponent } from './views/page-tareas/page-tareas.component';
import { PageTareasService } from './views/page-tareas/page-tareas-service/page-tareas.service';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    PageTareasComponent
  ], // Importar componentes
  imports: [ // Importar otros modulos
    BrowserModule
  ],
  providers: [ PageTareasService ], // Importar servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
