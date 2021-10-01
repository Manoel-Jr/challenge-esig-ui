import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TarefaListComponent } from './tarefa-list/tarefa-list.component';
import { CreateTarefaComponent } from './create-tarefa/create-tarefa.component';
import { UpdateTarefaComponent } from './update-tarefa/update-tarefa.component';
import { TarefaDetailsComponent } from './tarefa-details/tarefa-details.component';
@NgModule({
  declarations: [
    AppComponent,
    TarefaListComponent,
    CreateTarefaComponent,
    UpdateTarefaComponent,
    TarefaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
