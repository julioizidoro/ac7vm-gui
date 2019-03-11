import { GrupoContasService } from '../grupocontas.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-consgrupocontas',
  templateUrl: './consgrupocontas.component.html',
  styleUrls: ['./consgrupocontas.component.css']
})
export class ConsGrupoContasComponent implements OnInit {

    formulario: FormGroup;



  constructor(
    private grupocontasservice: GrupoContasService,) {}



  ngOnInit() {
    
  }

}
