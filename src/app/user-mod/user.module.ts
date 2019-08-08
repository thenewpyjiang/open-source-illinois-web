import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AngularMaterialsModModule } from '../angular-materials-mod/angular-materials-mod.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialsModModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class UserModModule { }
