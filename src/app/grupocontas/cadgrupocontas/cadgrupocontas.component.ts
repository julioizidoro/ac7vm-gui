import { GrupoContasService } from '../grupocontas.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-cadgrupocontas',
  templateUrl: './cadgrupocontas.component.html',
  styleUrls: ['./cadgrupocontas.component.css']
})
export class CadGrupoContasComponent implements OnInit {

    formulario: FormGroup;



  constructor(
    private grupocontasservice: GrupoContasService,) {}



  ngOnInit() {
    
  }

}
