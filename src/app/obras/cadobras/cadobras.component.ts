import { ObrasService } from '../obras.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Cep } from 'src/app/share/model/cep';
import { ConsultacepService } from './../../share/consultacep.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadobras',
  templateUrl: './cadobras.component.html',
  styleUrls: ['./cadobras.component.css']
})
export class CadObrasComponent implements OnInit {

    formulario: FormGroup;
    cep: Cep;



  constructor(private consultacepService: ConsultacepService,
    private router: Router
    ,private formBuilder: FormBuilder,
    private obrasService: ObrasService,) {}



  ngOnInit() {
    this.formulario = this.formBuilder.group({
      
        nome: [null],
        engenheiroresponsavel: [null],
        clienteenderecoresidencial: this.formBuilder.group({
          idclienteenderecoresidencial: [null],
          cercep: [null],
          cerendereco: [null],
          cernumero: [null],
          cerbairro: [null],
          cercomplemento: [null],
          cercidade: [null],
          cerestado: [null],
          cerfoneresidencial: [null]
        })
      })
  }

  consultarCEP(tipo: string){
    let cepInformado;
    if (tipo=='c'){
        cepInformado = this.formulario.get('clienteenderecocomercial.ceccep').value;
    }else {
      cepInformado = this.formulario.get('clienteenderecoresidencial.cercep').value;
    }

    cepInformado = cepInformado.replace(/\D/g, '');
    this.consultacepService.consultar(cepInformado).subscribe(
      resposta => {
        this.cep = resposta;
        if (tipo == 'c') {
          this.formulario.patchValue({
            clienteenderecocomercial: {
                cecendereco: this.cep.logradouro,
                cecbairro: this.cep.bairro,
                ceccidade: this.cep.localidade,
                cecestado: this.cep.uf
            }
        });
        } else {
          this.formulario.patchValue({
            clienteenderecoresidencial: {
                cerendereco: this.cep.logradouro,
                cerbairro: this.cep.bairro,
                cercidade: this.cep.localidade,
                cerestado: this.cep.uf
            }
        });
        }

        console.log(this.cep);
      },
      err => {
        console.log(JSON.stringify(err));
      }
    );
}

}
