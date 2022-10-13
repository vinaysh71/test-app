import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'journal',
    loadChildren: () => import('./modules/journal/journal.module').then(m => m.JournalModule)
  },
  {
    path: 'works',
    loadChildren: () => import('./modules/works/works.module').then(m => m.WorksModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: '',
    redirectTo: 'journal',
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
