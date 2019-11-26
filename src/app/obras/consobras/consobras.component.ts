import { ObrasService } from '../obras.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Obra } from '../model/obra';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/usuario/model/usuario';
import { AuthService } from 'src/app/usuario/login/auth.service';

@Component({
  selector: 'app-consobras',
  templateUrl: './consobras.component.html',
  styleUrls: ['./consobras.component.css']
})
export class ConsObrasComponent implements OnInit {

    formulario: FormGroup;
    isFirstOpen = false;
    oneAtATime = true;
    obras: Obra[];
    usuairo: Usuario;



  constructor(
    private obrasService: ObrasService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    ) {}



  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null],
  });
  this.consultar();
  }

  consultar() {
    this.formulario.reset();
    this.obrasService.listar().subscribe(
        resposta => {
            this.obras = resposta as any;
        }
    );
  }

  pesquisarNome() {
    const nome = this.formulario.get('nome').value;
    this.obrasService.pesquisarNome(nome).subscribe(
        resposta => {
            this.obras = resposta as any;
        }
    );
  }

  editar(obra: Obra) {
    this.obrasService.setObra(obra);
    this.router.navigate([ '/cadobras']);
  }

}
