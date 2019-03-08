import { ObrasService } from './obras.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsObrasComponent } from '../obras/consobras/consobras.component';
import { routing } from '../app.routing';
import { AccordionModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CadObrasComponent } from '../obras/cadobras/cadobras.component';

@NgModule({
  declarations: [
    ConsObrasComponent,
    CadObrasComponent
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
    ConsObrasComponent,
    CadObrasComponent
  ],
  providers: [
    ObrasService,
  ]
})
export class ObrasModule { }
