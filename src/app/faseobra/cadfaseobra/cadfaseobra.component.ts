import { FaseObraService } from '../faseobra.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-cadfaseobra',
  templateUrl: './cadfaseobra.component.html',
  styleUrls: ['./cadfaseobra.component.css']
})
export class CadFaseObraComponent implements OnInit {

    formulario: FormGroup;



  constructor(
    private faseobraservice: FaseObraService,) {}



  ngOnInit() {
    
  }

}
