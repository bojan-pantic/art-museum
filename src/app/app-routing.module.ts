import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { ExibitionsComponent } from './exibitions/exibitions.component';
import { AddExibitionComponent } from './exibitions/add-exibition/add-exibition.component';
import { ExibitionPageComponent } from './exibitions/exibition-page/exibition-page.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'exibitions', component: ExibitionsComponent },
  { path: 'add', component: AddExibitionComponent },
  { path: 'exibition/:id', component: ExibitionPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
