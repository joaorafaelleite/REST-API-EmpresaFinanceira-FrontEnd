import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotFoundError, catchError } from 'rxjs';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-atualizar-clientes',
  templateUrl: './cadastrar-atualizar-clientes.component.html',
  styleUrls: ['./cadastrar-atualizar-clientes.component.css']
})
export class CadastrarAtualizarClientesComponent {

  clienteForm = new FormGroup({
    cpf: new FormControl('',Validators.required),
    nome: new FormControl('',Validators.required),
    telefone: new FormControl('',Validators.required),
    endereco: new FormGroup({
      rua: new FormControl('',Validators.required),
      numero: new FormControl('',Validators.required),
      cep: new FormControl('',Validators.required)
    }),
    rendimentoMensal: new FormControl(0,Validators.required)
  })

  constructor(private clientesService: ClientesService, private route: ActivatedRoute, private router: Router) {}

  cpfCliente = '';

  ngOnInit() {
    this.cpfCliente = String(this.route.snapshot.paramMap.get('cpf'));
    if(this.cpfCliente) {
      this.clientesService.buscarClientePorCpf(this.cpfCliente).subscribe((cliente: ICliente) => {
        this.clienteForm.setValue({
          cpf: cliente.cpf,
          nome: cliente.nome,
          telefone: cliente.telefone,
          endereco: {
            rua: cliente.endereco.rua,
            numero: cliente.endereco.numero,
            cep: cliente.endereco.cep,
          },
          rendimentoMensal: cliente.rendimentoMensal
        })
      });
    }
  }

  onSubmit() {
    if(this.cpfCliente === this.route.snapshot.paramMap.get('cpf')) {
      this.editar();
    }
    else{
      this.cadastrar();
    }
  }

  cadastrar() {
    const cliente: ICliente = this.clienteForm.value as ICliente;

    this.clientesService.cadastrarCliente(cliente).subscribe(result => {
      Swal.fire({
        text: 'Cliente Cadastrado com Sucesso',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/clientes']);
    }, error => {
        Swal.fire({
          text: 'Erro ao Cadastrar Cliente',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500
        })
      });
  }

  editar() {
    const cliente: ICliente = this.clienteForm.value as ICliente;

    if(this.cpfCliente === cliente.cpf) {
        this.clientesService.editarCliente(cliente).subscribe(result => {
          Swal.fire({
            text: 'Cliente Atualizado com Sucesso ',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/clientes']);
        },
        error => {
          Swal.fire({
            text: 'Erro ao Atualizar Cliente',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
          })
        });
    }
    else{
      Swal.fire({
        text: 'O campo CPF não pode ser alterado!',
        icon: 'error',
        showConfirmButton: true
      })
    }
  }

}
