import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactivesComponent } from './pages/reactives/reactives.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  {path: 'template', component: TemplateComponent},
  {path: 'reactivo', component: ReactivesComponent},
  {path: '**', pathMatch : 'full', redirectTo: 'template'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
