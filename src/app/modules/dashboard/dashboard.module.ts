import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FlexLayoutModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule} from '@shared/angular-material/index';
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
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class DashboardModule { }
