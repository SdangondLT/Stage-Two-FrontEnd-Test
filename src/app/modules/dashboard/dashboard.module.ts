import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AngularMaterialModule , FlexLayoutModule, FormsModule } from '@shared/angular-material/index';
import { FormComponent } from './components/form/form.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent,
    CardComponent
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
