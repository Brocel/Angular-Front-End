import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { RegisterComponent } from './register.component';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
