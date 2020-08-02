import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AOLBtnComponent } from './aol-btn/aol-btn.component';
import {FormsModule} from '@angular/forms';
import { FormListItemComponent } from './aol-btn/form-list-item/form-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AOLBtnComponent,
    FormListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
