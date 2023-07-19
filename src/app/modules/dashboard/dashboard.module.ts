import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LeftSideBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    DragDropModule
  ]
})
export class DashboardModule { }
