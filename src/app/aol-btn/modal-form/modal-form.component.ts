import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {
  @Input('heading') heading;
  name = 'Angular';
  
  valuesetForm: FormGroup;

  
  inputProps: {
    valueSet: [
      {
        id: 1,
        valueSetName: '';
      }
    ]
  };
  modalTitle: String = "AOL Comp";

  constructor(private fb:FormBuilder) {
    this.valuesetForm = this.fb.group({
      name: '',
      valuename: this.fb.array([]) ,
    });
  }

  valuenames() : FormArray {
    return this.valuesetForm.get("valuenames") as FormArray
  }
  
  
  newValuename(): FormGroup {
    return this.fb.group({
      
      val: '',
    })
  }


  addValuename() {
    this.valuenames().push(this.newValuename());
  }
   
  removeValuename(i:number) {
    this.valuenames().removeAt(i);
  }

  ngOnInit(): void {
  }

  //function that closes a modal with id
  public closeMod( ){
    //$(id).modal('hide')
  }
  public closeModal(){
    
  }
  onSubmit() {
    console.log(this.valuesetForm.value);
}
}
