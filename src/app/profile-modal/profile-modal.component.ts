import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent implements OnInit {

  @Output() onSubmitted : EventEmitter<any> = new EventEmitter<any>();

  profileForm = this.fb.group({
    profileName:[''],
    levelName:[''],
    applicationShortname:[''],
    prof:[''],
    appShortName:[''],
    respName:['']
  })

    labelName = {
     Site: "Prof #",
     App: "Application Shortname",
      Resp:"Resp_key name"
    }



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get checkForm(){
    return JSON.stringify(this.profileForm.value)
  }

  submit() {
    this.onSubmitted.emit(this.profileForm.value);
  }

}
