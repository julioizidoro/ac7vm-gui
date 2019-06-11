import { ConsbensComponent } from './consbens/consbens.component';
import { CadbensComponent } from './cadbens/cadbens.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BensService } from './bens.service';
import { routing } from '../app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [CadbensComponent, ConsbensComponent],
  imports: [
    CommonModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
  ],
  exports: [
    CadbensComponent,
    ConsbensComponent,
  ],
  providers: [
    BensService,
  ]
})
export class BensModule { }
