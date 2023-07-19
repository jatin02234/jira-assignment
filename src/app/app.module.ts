import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './modules/auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { SprintModule } from './modules/sprint/sprint.module';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AuthModule,
    SprintModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  exports: [

  ],
  providers: [
    BsModalRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
