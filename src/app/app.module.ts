import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';



import { ValuesetModalComponent } from './valueset-modal/valueset-modal.component';
import { ValuesetValueModalComponent } from './valueset-value-modal/valueset-value-modal.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { ResponsibilityModalComponent } from './responsibility-modal/responsibility-modal.component';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';
import { FlexfieldModalComponent } from './flexfield-modal/flexfield-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    ValuesetModalComponent,
    ValuesetValueModalComponent,
    MessageModalComponent,
    ResponsibilityModalComponent,
    ProfileModalComponent,
    FlexfieldModalComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
