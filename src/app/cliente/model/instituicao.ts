import { Clientecomplemento } from './clientecomplemento';
import { Clienteenderecocomercial } from './clienteenderecocomercial';
import { Clienteenderecoresidencial } from './clienteenderecoresidencial';
import { Clientesocio } from './clientesocio';
import { Clientesegundo } from './clientesegundo';
export class Instituicao {

  idinstituicao: number;
  nome: string;
  cpfcnpj: string;
  email: string;
  fonecelular: string;
  fonefixo: string;
  datacadastro: Date;
  tipo: string;
  tipojuridico: string;
  clientesocio: Clientesocio;
  clienteenderecoresidencial: Clienteenderecoresidencial;
  clienteenderecocomercial: Clienteenderecocomercial;
  clientecomplemento: Clientecomplemento;
  clientesegundo: Clientesegundo;
}
