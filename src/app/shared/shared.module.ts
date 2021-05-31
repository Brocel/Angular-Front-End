import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxBootstrapModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    NgxBootstrapModule,
    HttpClientModule
  ]
})
export class SharedModule { }
