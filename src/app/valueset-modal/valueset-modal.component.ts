import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-valueset-modal',
  templateUrl: './valueset-modal.component.html',
  styleUrls: ['./valueset-modal.component.css']
})
export class ValuesetModalComponent implements OnInit {

  
  constructor(private fb: FormBuilder) { }
  valuesetForm = this.fb.group({
    valuesetName:['']
  })
  ngOnInit(): void {
  }

  get checkForm(){
    return JSON.stringify(this.valuesetForm.value)
  }

}
