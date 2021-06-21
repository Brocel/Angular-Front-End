import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesHomeComponent } from '@app/feature/features-home/features-home/features-home.component'

const routes: Routes = [
  { path: 'feature/featuresHome', component: FeaturesHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
