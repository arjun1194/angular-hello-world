import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-responsibility-modal',
  templateUrl: './responsibility-modal.component.html',
  styleUrls: ['./responsibility-modal.component.css']
})
export class ResponsibilityModalComponent implements OnInit {


  @Output() onSubmitted : EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }
  respForm = this.fb.group({
    resKey:[''],
    appName:[''],
    reqGroup:['']
  })

  ngOnInit(): void {
  }
  get checkForm(){
    return JSON.stringify(this.respForm.value)
  }

  submit() {
    this.onSubmitted.emit(this.respForm.value);
  }
}
