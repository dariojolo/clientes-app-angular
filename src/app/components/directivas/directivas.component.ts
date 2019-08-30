import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  public listaCursos: string[] = ['Typescript', 'Javascript', 'Java SE', 'C#', 'PHP'];

  public habilitar: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  cambiar(){
    //this.habilitar = !this.habilitar;
  }

}
