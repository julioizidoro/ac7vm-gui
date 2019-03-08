import { ServicosService } from '../servicos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-consservicos',
  templateUrl: './consservicos.component.html',
  styleUrls: ['./consservicos.component.css']
})
export class ConsServicosComponent implements OnInit {

    formulario: FormGroup;



  constructor(
    private servicosService: ServicosService,) {}



  ngOnInit() {
    
  }

}
