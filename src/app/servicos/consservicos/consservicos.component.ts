import { ServicosService } from '../servicos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Servicos } from '../model/servicos';

@Component({
  selector: 'app-consservicos',
  templateUrl: './consservicos.component.html',
  styleUrls: ['./consservicos.component.css']
})
export class ConsServicosComponent implements OnInit {

    formulario: FormGroup;
    isFirstOpen = true;
  oneAtATime: boolean = true;



  constructor(
    private servicosService: ServicosService,) {}

    servico: Servicos[];


  ngOnInit() {
    this.consultar();
  }


  consultar() {
    this.servicosService.listar().subscribe(
      resposta => {
        this.servico = <any> resposta;
      }
    );

    console.log(this.servico);
  }

}
