import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        pathMatch:"full",
        redirectTo: "dashboard",
      },
      {
       path: "dashboard",
       pathMatch: "full",
       loadChildren: () =>
        import("../../modules/dashboard/dashboard.module").then(
          (m) => m.DashboardModule
        )
      },
      {
        path: "profile",
        pathMatch: "full",
        loadChildren: () =>
         import("../../modules/profile/profile.module").then(
           (m) => m.ProfileModule
         )
       },
       {
        path: "schedule",
        pathMatch: "full",
        loadChildren: () =>
         import("../../modules/schedule/schedule.module").then(
           (m) => m.ScheduleModule
         )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
