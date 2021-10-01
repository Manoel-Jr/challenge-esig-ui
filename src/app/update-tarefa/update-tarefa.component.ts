import { TarefaService } from './../shared/tarefa.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from '../shared/tarefa';

@Component({
  selector: 'app-update-tarefa',
  templateUrl: './update-tarefa.component.html',
})
export class UpdateTarefaComponent implements OnInit {

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

  update() {
    this.tarefaService.update(this.id, this.tarefa)
      .subscribe(data => {
        this.tarefa = new Tarefa();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.update();
  }

  gotoList() {
    this.router.navigate(['/tarefas']);
  }

}
