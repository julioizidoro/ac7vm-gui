import { FornecedoresService } from '../fornecedores.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-consfornecedores',
  templateUrl: './consfornecedores.component.html',
  styleUrls: ['./consfornecedores.component.css']
})
export class ConsuFornecedoresComponent implements OnInit {

    formulario: FormGroup;
    isFirstOpen = true;
    oneAtATime: boolean = true;



  constructor(
    private fornecedoresService: FornecedoresService,) {}



  ngOnInit() {
    
  }

}
