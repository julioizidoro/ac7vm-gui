import { ServicosService } from '../servicos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Servicos } from '../model/servicos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consservicos',
  templateUrl: './consservicos.component.html',
  styleUrls: ['./consservicos.component.css']
})
export class ConsServicosComponent implements OnInit {

    formulario: FormGroup;
    isFirstOpen = false;
  oneAtATime = true;



  constructor(
    private servicosService: ServicosService,
    private formBuilder: FormBuilder,
    private router: Router) {}


  ngOnInit() {
    this.formulario = this.formBuilder.group({
      descricao: [null]
    });
  }


  

}
