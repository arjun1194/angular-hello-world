import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { AolBtnComponent } from './aol-btn/aol-btn.component';

import { FormFieldComponent } from './aol-btn/form-field/form-field.component';
import {ModalFormComponent} from './aol-btn/modal-form/modal-form.component';
import { FormTitleComponent } from './aol-btn/form-title/form-title.component';


@NgModule({
  declarations: [
    AppComponent,
    AolBtnComponent,
    FormFieldComponent,
    ModalFormComponent,
    FormTitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
