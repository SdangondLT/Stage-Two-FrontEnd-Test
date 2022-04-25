import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardCreationComponent } from './components/card-creation/card-creation.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    CardCreationComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
