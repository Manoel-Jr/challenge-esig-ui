import { TarefaService } from './../shared/tarefa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa } from '../shared/tarefa';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tarefa-list',
  templateUrl: './tarefa-list.component.html',
})
export class TarefaListComponent implements OnInit {

  tarefas: Observable<Tarefa[]>;

  constructor(private tarefaService: TarefaService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.tarefas = this.tarefaService.getList();
  }

  delete(id: number) {
    this.tarefaService.delete(id)
      .subscribe(
        data => {
          this.loadData();
        },
        error => console.log(error));
  }

  tarefaDetails(id: number) {
    this.router.navigate(['detalhes', id]);
  }

  updateTarefa(id: number) {
    this.router.navigate(['atualizar', id]);
  }

  conclude(id: number) {
    this.tarefaService.done(id)
      .subscribe(
        data => {
          this.loadData();
        },
        error => console.log(error));
  }
}
