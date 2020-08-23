import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-flexfield-modal',
  templateUrl: './flexfield-modal.component.html',
  styleUrls: ['./flexfield-modal.component.css']
})
export class FlexfieldModalComponent implements OnInit {

  @Output() onSubmitted : EventEmitter<any> = new EventEmitter<any>();

  flexfieldForm = this.fb.group({
    fieldName:[''],
    contextCode:[''],
    applicationShortname:[''],
    attribute:['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  get checkForm(){
    return JSON.stringify(this.flexfieldForm.value)
  }
  submit() {
    this.onSubmitted.emit(this.flexfieldForm.value);
  }

}
