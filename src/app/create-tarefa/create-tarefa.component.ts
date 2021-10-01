import { TarefaService } from './../shared/tarefa.service';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../shared/tarefa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-tarefa',
  templateUrl: './create-tarefa.component.html',
})
export class CreateTarefaComponent implements OnInit {

  tarefa: Tarefa = new Tarefa();
  submitted = false;

  constructor(private tarefaService: TarefaService, private router: Router) { }

  ngOnInit() {}

  new(): void {
    this.submitted = false;
    this.tarefa = new Tarefa();
  }

  save() {
    this.tarefaService.create(this.tarefa).subscribe(data => {
      this.tarefa = new Tarefa();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/tarefas']);
  }

}
