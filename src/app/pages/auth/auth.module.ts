import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const MatImports=[ MatFormFieldModule , MatInputModule];

@NgModule({
  declarations: [ LoginComponent, SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule ,
    ...MatImports ]

})
export class AuthModule { }
