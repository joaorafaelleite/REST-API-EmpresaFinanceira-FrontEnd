export interface ICliente {
  cpf: string;
  nome: string;
  telefone: string;
  endereco: {
    rua: string;
    numero: string;
    cep: string;
  };
  rendimentoMensal: number;
}
