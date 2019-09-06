import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router, ActivatedRoute } from '@angular/router';

import  swal  from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private cliente: Cliente = new Cliente();
  private titulo = 'Crear cliente';
  private boton = 'Crear';

  constructor( private clienteService: ClienteService,
               private router: Router,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit() { 
    this.cargarCliente();
  }

  cargarCliente(): void {
    this.activatedRoute.params.subscribe(params => {
        let id = params['id'];
        if (id) {
          this.clienteService.getCliente(id).subscribe(
            (cliente ) => this.cliente = cliente
          );
          this.titulo = 'Editar cliente';
          this.boton = 'Editar';
        }
      });
  }
  public create(): void {
    console.log('Cliked!');
    console.log(this.cliente);
    this.clienteService.create(this.cliente).subscribe(
      response => {
        this.router.navigate(['/clientes']);
        swal.fire('Nuevo cliente', `Cliente ${this.cliente.nombre} creado con exito!`, 'success');
                  }
    );
  }
}
