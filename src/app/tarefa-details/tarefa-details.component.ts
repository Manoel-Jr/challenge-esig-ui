import { TarefaService } from './../shared/tarefa.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from '../shared/tarefa';

@Component({
  selector: 'app-tarefa-details',
  templateUrl: './tarefa-details.component.html',
})
export class TarefaDetailsComponent implements OnInit {

  id: number;
  tarefa: Tarefa;

  constructor(private route: ActivatedRoute, private router: Router, private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefa = new Tarefa();

    this.id = this.route.snapshot.params.id;
    this.tarefaService.get(this.id)
      .subscribe(data => {
        this.tarefa = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['tarefas']);
  }

}
