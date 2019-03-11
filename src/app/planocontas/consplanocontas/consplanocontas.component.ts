import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { PlanoContasService } from '../planocontas.service';

@Component({
  selector: 'app-consplanocontas',
  templateUrl: './consplanocontas.component.html',
  styleUrls: ['./consplanocontas.component.css']
})
export class ConsPlanoContasComponent implements OnInit {

    formulario: FormGroup;



  constructor(
    private planocontaservice: PlanoContasService,) {}



  ngOnInit() {
    
  }

}
