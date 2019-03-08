import { ObrasService } from '../obras.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-consobras',
  templateUrl: './consobras.component.html',
  styleUrls: ['./consobras.component.css']
})
export class ConsObrasComponent implements OnInit {

    formulario: FormGroup;



  constructor(
    private obrasService: ObrasService,) {}



  ngOnInit() {
    
  }

}
