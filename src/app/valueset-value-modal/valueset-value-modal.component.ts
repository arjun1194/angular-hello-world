import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-valueset-value-modal',
  templateUrl: './valueset-value-modal.component.html',
  styleUrls: ['./valueset-value-modal.component.css']
})
export class ValuesetValueModalComponent implements OnInit {


  valuesetValueForm = this.formBuilder.group({
    valuesetName:[''],
    values: ['']
  });

  constructor(private formBuilder: FormBuilder) {}

  @Output() onSubmitted : EventEmitter<any> = new EventEmitter<any>();

  get checkForm(){
    return JSON.stringify(this.valuesetValueForm.value)
  }


  ngOnInit() {
  }


  submit() {
    this.onSubmitted.emit(this.valuesetValueForm.value);
  }
}
