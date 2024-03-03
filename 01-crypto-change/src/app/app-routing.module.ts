import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StartComponent } from './components/start/start.component';
import { PlusComponent } from './components/tabs/plus/plus.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/plus', component: PlusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
