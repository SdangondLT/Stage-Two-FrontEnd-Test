import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
//import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    //SharedModule,
    MatToolbarModule
  ]
})
export class MainLayoutModule { }
