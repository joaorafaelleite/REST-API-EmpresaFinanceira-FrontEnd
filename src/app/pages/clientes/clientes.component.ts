import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes: ICliente[] = [];
  constructor(private clientesService: ClientesService) {}

  ngOnInit() {
    this.clientesService.buscarTodosOsClientes().subscribe((result: ICliente[]) => {
      this.clientes = result;
    });
  }

  deletarCliente(cpf: string) {
    Swal.fire({
      text: 'Deseja excluir o cliente?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientesService.deletarCliente(cpf)
        .subscribe(
          () => {
          this.clientesService.buscarTodosOsClientes().subscribe((result: ICliente[]) => {
            this.clientes = result;
          });
          Swal.fire({
            title: 'Cliente Excluido com Sucesso',
            showConfirmButton: false,
            icon: 'success',
            timer: 1500
          });
        }, (error) => {
          Swal.fire({
            text: 'Erro ao Deletar Cliente',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
          });
        });
        }
      });
  }

}
