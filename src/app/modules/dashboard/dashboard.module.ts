import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardCreationComponent } from './components/card-creation/card-creation.component';
import { DashboardComponent } from './dashboard.component';
import { AngularMaterialModule , FlexLayoutModule, FormsModule } from '@shared/index';


@NgModule({
  declarations: [
    CardCreationComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class DashboardModule { }
