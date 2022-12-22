import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import { EditComponent } from './edit/edit.component';
import { PronouceComponent } from './pronouce/pronouce.component'
import { SlidersComponent } from './sliders/sliders.component';

const routes: Routes = [
  { path: '', redirectTo: '/pronouce', pathMatch: 'full' },
  { path: 'pronouce', component: PronouceComponent },
  { path: 'sliders', component: SlidersComponent },
  { path: 'links', component: AboutComponent },
  { path: 'auth/:id', component: AuthComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
