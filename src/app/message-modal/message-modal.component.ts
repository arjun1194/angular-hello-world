import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})
export class MessageModalComponent implements OnInit {

  @Output() onSubmitted : EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }
  messageForm = this.fb.group({
    messageName:[''],
    appName:['']
  })

  ngOnInit(): void {
  }
  get checkForm(){
    return JSON.stringify(this.messageForm.value)
  }
  submit() {
    this.onSubmitted.emit(this.messageForm.value);
  }
}
