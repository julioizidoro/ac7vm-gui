import { ServicosService } from '../servicos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadservicos',
  templateUrl: './cadservicos.component.html',
  styleUrls: ['./cadservicos.component.css']
})
export class CadServicosComponent implements OnInit {

    formulario: FormGroup;



  constructor(
    private router: Router
    ,private formBuilder: FormBuilder,
    private obrasService: ServicosService,) {}



  ngOnInit() {
    this.formulario = this.formBuilder.group({
      
        descricao: [null],
      })
  }

  

}
