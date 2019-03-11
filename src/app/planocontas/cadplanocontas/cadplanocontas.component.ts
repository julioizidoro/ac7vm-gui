import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { PlanoContasService } from '../planocontas.service';

@Component({
  selector: 'app-cadplanocontas',
  templateUrl: './cadplanocontas.component.html',
  styleUrls: ['./cadplanocontas.component.css']
})
export class CadsPlanoContasComponent implements OnInit {

    formulario: FormGroup;



  constructor(
    private planocontaservice: PlanoContasService,) {}



  ngOnInit() {
    
  }

}
