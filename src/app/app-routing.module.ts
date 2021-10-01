import { CreateTarefaComponent } from './create-tarefa/create-tarefa.component';
import { TarefaListComponent } from './tarefa-list/tarefa-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateTarefaComponent } from './update-tarefa/update-tarefa.component';
import { TarefaDetailsComponent } from './tarefa-details/tarefa-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'tarefas', pathMatch: 'full' },
  { path: 'tarefas', component: TarefaListComponent },
  { path: 'adicionar', component: CreateTarefaComponent },
  { path: 'atualizar/:id', component: UpdateTarefaComponent },
  { path: 'detalhes/:id', component: TarefaDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
