import { FaseObraService } from './faseobra.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsFaseObraComponent } from '../faseobra/consfaseobra/consfaseobra.component';
import { routing } from '../app.routing';
import { AccordionModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CadFaseObraComponent } from '../faseobra/cadfaseobra/cadfaseobra.component';

@NgModule({
  declarations: [
    CadFaseObraComponent,
    ConsFaseObraComponent
  ],
  imports: [
    CommonModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  exports: [
    ConsFaseObraComponent
  ],
  providers: [
    FaseObraService,
  ]  
})
export class FaseObraModule { }
