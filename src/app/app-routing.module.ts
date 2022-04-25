import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./layouts/main-layout/main-layout.module')
    .then(m => m.MainLayoutModule)
  },
  {
    path: "dashboard",
    loadChildren: () => import('./modules/dashboard/dashboard.module')
    .then(m => m.DashboardModule)
  },
  {
    path: "profile",
    loadChildren: () => import('./modules/profile/profile.module')
    .then(m => m.ProfileModule)
  },
  {
    path: "schedule",
    loadChildren: () => import('./modules/schedule/schedule.module')
    .then(m => m.ScheduleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
