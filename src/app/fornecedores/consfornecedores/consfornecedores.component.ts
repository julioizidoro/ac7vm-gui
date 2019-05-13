import { FornecedoresService } from '../fornecedores.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consfornecedores',
  templateUrl: './consfornecedores.component.html',
  styleUrls: ['./consfornecedores.component.css']
})
export class ConsuFornecedoresComponent implements OnInit {

    formulario: FormGroup;
    isFirstOpen = false;
    oneAtATime = true;



  constructor(
    private fornecedoresService: FornecedoresService,
    private formBuilder: FormBuilder,
    private router: Router) {}



  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null],
    });
  }

}
