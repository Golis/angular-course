import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LadingpageComponent } from './ladingpage/ladingpage.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { ListitemsComponent } from './listitems/listitems.component';
import { DeeperDirectivesComponent } from './deeper-directives/deeper-directives.component';

const routes: Routes = [
  {
    path:'',
    component: LadingpageComponent
  },
  {
    path: 'helpcenter',
    component: HelpcenterComponent
  },
  {
    path: 'employees',
    component: ListitemsComponent
  },
  {
    path: 'deeper-directives',
    component: DeeperDirectivesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
