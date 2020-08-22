import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})
export class MessageModalComponent implements OnInit {

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
}
