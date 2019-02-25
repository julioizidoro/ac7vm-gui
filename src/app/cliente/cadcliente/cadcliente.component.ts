import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadcliente',
  templateUrl: './cadcliente.component.html',
  styleUrls: ['./cadcliente.component.css']
})
export class CadclienteComponent implements OnInit {
  isFirstOpen = true;
  oneAtATime: boolean = true;
  bsInlineValue = new Date();
  constructor() { }

  ngOnInit() {
  }


  
}



