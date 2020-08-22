import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-valueset-value-modal',
  templateUrl: './valueset-value-modal.component.html',
  styleUrls: ['./valueset-value-modal.component.css']
})
export class ValuesetValueModalComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  valuesetValueForm = this.fb.group({
    valuesetName:[''],
    values:this.fb.array([''])
  })

  values() : FormArray {
    return this.valuesetValueForm.get("values") as FormArray
  }
   
  newValue(): FormGroup {
    return this.fb.group({
      value: '',
    })
  }
   
  addValues() {
    this.values().push(this.newValue());
  }
   
  removeValues(i:number) {
    this.values().removeAt(i);
  }  


  get checkForm(){
    return JSON.stringify(this.valuesetValueForm.value)
  }

  ngOnInit(): void {
  }

}
