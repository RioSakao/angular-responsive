import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  // { path: 'top-banner', loadChildren: () => import('./features/top-banner/top-banner.module').then(mod=> mod.TopBannerModule) },
  { path: 'top-banner-stand-alone', loadComponent: () => import('./features/top-banner-standalone/top-banner-standalone.component').then(mod=>mod.TopBannerStandaloneComponent)},
  { path: 'parent', loadComponent: () => import('./features/parent/parent.component').then(mod=>mod.ParentComponent)},
  { path: 'child', loadComponent: () => import('./features/child/child.component').then(mod=>mod.ChildComponent)},
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
