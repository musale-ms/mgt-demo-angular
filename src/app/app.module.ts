import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ToDoComponent } from './to-do/to-do.component';
import { GetComponent } from './get/get.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AgendaComponent,
    ToDoComponent,
    GetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
