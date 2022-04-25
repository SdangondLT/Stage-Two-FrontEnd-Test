import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardCreationComponent } from './components/card-creation/card-creation.component';
import { DashboardComponent } from './dashboard.component';
//import { SharedModule } from '../../shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    CardCreationComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatGridListModule,
    MatCardModule,

    MatFormFieldModule,
    MatSelectModule,
    FlexLayoutModule
    //SharedModule
  ]
})
export class DashboardModule { }
