import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { EmailVerificationPageRoutingModule } from './email-verification-routing.module';

import { EmailVerificationPage } from './email-verification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailVerificationPageRoutingModule,
    HttpClientModule
  ],
  declarations: [EmailVerificationPage]
})
export class EmailVerificationPageModule {}
