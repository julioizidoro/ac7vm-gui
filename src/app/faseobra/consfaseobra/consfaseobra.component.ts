import { FaseObraService } from '../faseobra.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-consfaseobra',
  templateUrl: './consfaseobra.component.html',
  styleUrls: ['./consfaseobra.component.css']
})
export class ConsFaseObraComponent implements OnInit {

    formulario: FormGroup;
    isFirstOpen = true;
    oneAtATime: boolean = true;



  constructor(
    private faseobraservice: FaseObraService,) {}



  ngOnInit() {
    
  }

}
