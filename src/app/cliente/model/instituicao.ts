import { Clientecomplemento } from './clientecomplemento';
import { Clienteenderecocomercial } from './clienteenderecocomercial';
import { Clienteenderecoresidencial } from './clienteenderecoresidencial';
import { Clientesocio } from './clientesocio';
import { Clientesegundo } from './clientesegundo';
export class Instituicao {

  idinstituicao: number;
  nome: string;
  tipojuridico: string;
  tipo: string;
  cpfcnpj: string;
  fonecelular: string;
  fonefixo: string;
  email: string;
  datacadastro: Date;
  segundo: boolean;
  clientesocio: Clientesocio;
  clienteenderecoresidencial: Clienteenderecoresidencial;
  clienteenderecocomercial: Clienteenderecocomercial;
  clientecomplemento: Clientecomplemento;
  clientesegundo: Clientesegundo;

}
